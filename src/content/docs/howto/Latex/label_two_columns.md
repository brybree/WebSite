---
title: Two columns Layout in LaTeX
description: How to have two columns layout in latex with no horizontal/vertical padding using LaTex
---

So I had a few labels to print in a two-column layout, with the specific requirements : 
 - 0.7cm margin at the top
 - Each row must be 3.5cm height
 - The text must be centered equally, meaning we should have the same white space at the left and the right of the text

:::note
We don't use <code>multicol</code> package as it adds internal vertical padding.
:::

```latex
\documentclass[a4paper]{article}
\usepackage[a4paper,
top=0.7cm,
bottom=0.7cm,
left=0cm,
right=0cm
]{geometry}
\usepackage{array}

\newcommand{\CellContent}[2]{%
	% minipage sets a fixed height of 3.5 cm and vertically centers the content
	\begin{minipage}[c][3.5cm][c]{\linewidth}
		\centering
		\textbf{#1} \\[0.2em] % You can arrange the layout of the text as you want here
		#2
	\end{minipage}
}

\begin{document}
	% align the entire table center
	\begin{center}
		% '@{}' remove the horizontal padding, here for the left, middle and the right padding
		% 'p{0.5\textwidth}' define a column set at exactly half the text width of the page
		\begin{tabular}{@{}p{0.5\textwidth}@{}p{0.5\textwidth}@{}}
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
			\CellContent{TITLE}{2025} & \CellContent{TITLE}{2025} \\
		\end{tabular}
	\end{center}
\end{document}

```