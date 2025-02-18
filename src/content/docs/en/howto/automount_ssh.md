---
title: How to automount a ssh folder
description: From ssh command to automounted folder.
draft: true
todo: test
---

<p>Let's say you have an ssh command like:

```sh
ssh user@server_ip -i /etc/ssh/id_ed25519 -p 1234
```

You can turn it to a folder with:

```sh
sshfs -o idmap=user user@server:/path/to/distant/folder /path/to/local/folder -p 1234 -o IdentityFile=/etc/ssh/id_ed25519
```

:::note
<p>idmap=user to map local user uid with server user uid</p>
:::

<p>If that works, you can now automount it with fstab at startup, edit the '/etc/fstab' file to add: </p>

```sh 
user@server_ip:/path/to/distant/folder /path/to/local/folder fuse.sshfs auto,allow_other,_netdev,reconnect,idmap=user,port=1234,identityfile=/etc/ssh/id_ed25519,default_permissions,uid=1000,gid=1000 0 0 
```

:::note
<p>auto to automount at startup, although it is recommended to use 'noauto' instead for a network drive<p>
<p>allow_other, required as the /etc/fstab is run with root privilege<p>

</p>