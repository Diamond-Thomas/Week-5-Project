### Explain how you used HTML tags and attributes to distinguish the different walls and poems. Why is it important to give each item a unique ID?

I used HTML tags and attributes  to distinguish the different walls and poems along with unique IDs so that it would be esier to target when editing later. Instead of using targeted nesting which is another option, directly using IDs and puting them in divs with other tags and attributes with IDs on them can make it so that you can access it directly.

### What was the difference between what getElementById returned and what your group selection method returned?
One differerence I saw between getElementById and group selection was that getElementById printed out all the lines as /n.

### When you moved the item, did you have to manually “delete” it from the first wall? Explain what happened to the node in the DOM tree when you called the movement method.

No I did not have to manually delete it from the first wall because by using appendchild the node is automatically moved from where it orginally was to the place that it appended to.

### Describe the lifecycle of an element created with document.createElement(). Where does that element exist in memory before you call appendChild(), and at what point does it become visible on the page?
Maybe I missed something when I was reading but i'm not exactly sure where the element exists before its appended. I know that when it is appended using appendChild that it exists as a child of wherever its appended to and that it should be visible once javascript is done executing but im not sure if that was the answer that you were looking for.

side note - please ignore previous comments on previous phase, I didn't realize that there was a phase four and didn't even see it so I accidently added the listening event on phase three but went back and added the rest on phase four to submit.