# LCPP Filter
Firefox extension that allows blocking of users on learncpp.com. Created in response to annoying waves of bots in the comments.
Currently requires manually adding username to the array in the .js file. 
can be run as a test extension through about:debugging on firefox.

## TODO:
- Allow manual blocking of users
  - dropdown with text field
  - re-runs function on user-add
- add removal of users from the block list

## ADDITIONAL NOTE
I am aware of the solution to the bots at: https://greasyfork.org/en/scripts/555099-learncpp-comment-antispam
Ironically, I could only see their comments *after* I had managed to clear the bot comments myself.
I think this extension is unique enough in its goal of being a general purpose manual user blocking tool whereas that assesses comments on the basis of their contents.
Anyways thanks to them for making that script as it's very nice and better than mine, as well as for being the reason I learned about MutationObservers. :)

