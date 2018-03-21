# Trivia Game
### *HOMEWORK #5:* Are You a Jedi or a Sith?

[Link to Gitpages](https://oitowl7.github.io/trivia-game/)

This purpose of this assignment is to create a trivia game with a timer, reset button, and final score. 

The original assignment was to create and actual multiple choice trivia game (think multiple choice Jeopardy!) but I found that a little silly given our constraints on what we could do. Having a trivia game that only had 5 possible questions, while showing our ability to do the basics of the assignment, doesn't actually make sense from a user's perspective.

Instead, I decided to ask the user a series of questions with weighted answers that would tell you if you are more like a Jedi or more like a Sith (*Star Wars* references, for those uninitiated). Each answer corresponds directly to an action or quote made by a Jedi or Sith in the movies. At the end, it displays the character you are most like with a little blurb about each one.

![Splash Page](https://i.imgur.com/XwT4QFi.jpg)

***
## Technologies Used
This project uses the same main technologies as the previous [crystal cat #4](https://github.com/oitowl7/crystals) assignment. The only things that I used that were different is the font (more about that later).

***
## Lessons Learned
One of the requirements for this project was to use a `setInterval` function to countdown how much time the user had left to answer the question. If they did not answer the question in time, the answer value passed is a `JarJar`. If the user gets nothing but `JarJar`s, they are shown the JarJar Binks screen. This is not a good thing.
![JarJarPage](https://i.imgur.com/k3X6DOc.jpg)

One huge thing I learned was that sometimes custom web fonts are **NOT** easy to work with. The *Star Wars* font that was used on this page was very frustrating to get to work. I downloaded it from the web, worked for several hours trying to make it work, found out it was corrupted and ran it through some kind of "fixer", and finally got it to work. I'm very glad I got it to work as I feel like it really pulls the page together but it was amazingly difficult to get to work.

By far the thing that took up the most time had nothing at all to do with programming. Look at these two results images.

![Darth Maul](https://i.imgur.com/GF6OizP.jpg)
![Rey](https://i.imgur.com/8pg26fM.jpg)

I had to make 22 different possible results because of how I made the game (possible 10 dark side points, 10 light side points, 0 points, or all JarJar points). That means I had to find and crop 22 photos, make up a tagline for each one (that bit about "one of the greatest hate filled fighters ever" or "you are a natural force user...") and make a mini-bio for each. This last part turned out to take forever as there isn't really many mini-bios out there for star wars characters. They all tend to be about 50 pages long and not simple. This seemingly insignificant thing took several hours to get done, but I'm very glad I did. I feel like it gives the quiz a lot of personality. However, I learned that sometimes, the things that take up the most time are not the ones that are most technical. Despite this, the time these things takes still needs to be factored into timelines or you may end up typing bios until 3am the night before they need to be done.

***
## Issues
This project is pretty much bug free. I haven't been able to break it now that I got it working. However, like I mentioned earlier, the *Star Wars* font took an age to get to work properly due to corrupt files.
