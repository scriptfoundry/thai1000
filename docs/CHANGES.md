Below are bugfixes and general changes as of Oct 22 at 19:48

[x] In any card view add a small info icon that, if pressed, will display the detail view for that word. The purpose is to provide context for the Thai word and disambiguate it from other possible meanings.

[ ] On the back face of any card (any direction) change the "say again" behaviour: now say the back-side word and then the front-dive word. Front face behaviour does not change.

[ ] Change the swipe back behaviour: now, of on the front face, go back to the back face of the previous card, and when on the back face go back to the front face of the same card. Do not permit changes to grading of earlier cards.

[ ] Show the "Test this deck" button after only one complete cycle of the deck cards.

[ ] Add text filter input for the words-list view. Display all words matching the requested text anywhere in the `englishWord` field. Do not trim search text (for example, a search for ` to ` should not be shortened to `to`) For now, do not filter by Thai. When blank, show all cards.

[ ] Make "Th->En" and "En->Th" into button group headers so that the buttons are more likely to fit into a single line on Android.