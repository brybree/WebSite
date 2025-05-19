---
title: Ntfs and Unix-style permissions
description: A simple hello world page
---

## The problem

I was installing dependencies for a **npm** project on a mounted **NTFS** drive. Here is the _/etc/fstab_ line concerning the drive:
<br>
`UUID=12A3BC45D6EF678G /media/user/DATA2 ntfs defaults,uid=1000,gid=1000,dmask=027,fmask=137 0 0`

We got some errors similar to the following: 

```sh title="Errors running npm install"
npm error command sh -c (node install/libvips && node install/dll-copy && prebuild-install) || (node install/can-compile && node-gyp rebuild && node install/dll-copy)
...
npm error sh: 1: prebuild-install: Permission denied
```

## The reason

NTFS (via <code>ntfs-3g</code>) does not support Unix-style permissions and execution bits properly. This breaks:
 - npm scripts that run binaries (<code>prebuild-install</code>, <code>node-gyp</code>, etc.)
 - Native module compilation (<code>sharp</code>, <code>bcrypt</code>, etc.)
 - Anything that needs to be executable or symbolic links

## The solution

The simplest, and almost unique, solution is to move the project to a native Unix-type filesystem. 

:::caution[Another possibility]
Another solution could be to add the <code>exec</code> mount option (even though it wouldn't solve everything, like symlinks, or might even silently allow scripts to fail...). However, I didn't test it.
::: 