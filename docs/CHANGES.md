Below are bugfixes and general changes as of Oct 23

[x] In the word dialog view, turn the `Close` text button into a close icon at the top-righthand corner of the dialog box. Give the icon a higher `z-index` stacking order than either `p.word-id` and `h2.word-thai` (though they should never overlap).

[x] Also in the word dialog view:
	1. Move the remaining buttons to above the word-status table.
	2. Make them fit on one line.
	3. Change button text:
		1. `Queue for next practice` becomes `Practice / now`
		2. `Hide` (no change)
		3. `Reset to NEW` becomes `Reset`

[x] In the words list view, instead of `REVIEW` show a two-part value:
	1. First put a number that shows how many days until it is due for testing again (e.g. `12d`). For overdue cards put `od` (lower case).
	2. Then put an icon representing difficutly in increments of 1-to-8. Use the `Lower-nth-Eighth block` Unicode series (U+2581 - U+2588), where `Lower one eighth block` means the lowest difficulty and `Full block` shows the highest difficulty. The icons should also be coloured according to the closest integer difficulty of that word-direction:
		rgb(96, 165, 250) for difficulties 1 or 2
		rgb(52, 211, 153) for difficulties 3 or 4
		rgb(251, 191, 36) for difficulties 5 or 6
		rgb(251, 146, 60) for difficulties 7 or 8
		rgb(220, 38, 38)  for difficulties 9 or 10