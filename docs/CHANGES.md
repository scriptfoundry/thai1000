Below are bugfixes and general changes as of Oct 29

[x] Because the `speechSynthesisUtterance` is sometimes unclear when the word is spoken in Thai, I think we need to show the word again on the card front view. Remove the speaker icon from the cart front and just put the word that is being practiced or tested.

[x] When opening the word-detail view from a card view, hide the `english` behind a black bar (`background-color: black; color: black;`) and reveal the answer when you click/touch it (basically turn this into a "spoiler tag".) When opening the word-detail view from the main menu the `english` field should be visible normally.
