---
title: Automating Image Layout in LaTeX with Python
description: Simple python script to automate the generation of LaTex "\includegraphics commands" by reading from a folder
draft: true
---

So I had a few images to print at specific dimensions, I used LaTex (via TeXstudio) and quickly came up with this solution:

```latex
\documentclass[a4paper]{article}
\usepackage{graphicx}
\usepackage[margin=0.5cm]{geometry}
\usepackage{caption}

\graphicspath{{./images/}}

\begin{document}

	\noindent
	\includegraphics[width=9cm, height=13cm]{CARD_1-mlk789jhg.png}\hfill
	\includegraphics[width=9cm, height=13cm]{CARD_2-poi86uyt.png}\hfill
	
	\vspace{0.5cm}

	\noindent
	\includegraphics[width=9cm, height=13cm]{CARD_3-fsdfezr.png}\hfill
	\includegraphics[width=9cm, height=13cm]{CARD_4-fds789zer.png}\hfill

	\vspace{0.5cm}
\end{document}
```

The problem was that I had a lot of images to print, and you can't loop over a folder using LaTex. I also didn't want to write out each image manually. On top of that, the 'images' folder would often change.

So I came up with this Python script, which reads the contents of the 'images' folder and copies the corresponding LaTex code directly to the clipboard:
```python
import os
import io
import subprocess

output = io.StringIO()

files = [f for f in os.listdir("./images/")]
i = 0

for f in files:
    if i % 2 == 0:
        print(r"""	\noindent""", file=output)
    print(r"""	\includegraphics[width=9cm, height=13cm]{""" + f + r"""}\hfill""", file=output)
    if i % 2 == 1:
        print(r"""	\vspace{0.5cm}
              """, file=output)
    i += 1

text = output.getvalue()
subprocess.run("xsel --clipboard --input", input=text.encode(), shell=True)
```

Now I can just :
- Choose the images I want,
- Run the script,
- And paste the result directly into my latex document.