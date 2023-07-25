import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page.</div>
      <button
        onClick={() => {
          navigate("order-summary", { replace: true });
        }}
      >
        Place Order
      </button>
      {/* <article>
        Idea #1 Dear notebook that I have stolen from my mother’s pocket, I dare
        to write about my fear of the water, my personal secret. I dare to strip
        you of your former contents, the ramblings of a mad woman about her sick
        child and her many chores. I dare to replace those pages with the
        ramblings of an even madder woman, well a girl, for I must correct the
        fact up front that I am a girl and not a woman, but mad, I am. I dare to
        write for what would be the point of mother teaching me to write and
        giving me this pen if I were not meant to write. I dare to keep my notes
        hidden though, especially from my mother because she has kept me hidden
        all this time in this awful tower, with a single hole that peers out at
        that sinful body of water. She, like the ocean has tormented me all this
        time, denying me the fullness of a golden sun and the gentleness of the
        wind’s caress on the skin. | © Mary Andrews Idea #2 Manny left work on a
        high note, making her long black hair bounce as she walked to her car.
        She was taking Friday off to join her girlfriends for a long weekend at
        a cabin. She prepared a hike for one day, Nancy had rented a boat,
        Brenna put in reservations for jet skies, Chef Jillian had all of their
        dinners planned, and bartender Sharon was bringing the drinks. | ©
        Elaine Kaye Idea #3 On a still November night the water in the creek
        slipped silently past the village, unseen by black-windowed houses. Two
        jetties stretched out as if the village was dipping its fingers into the
        inky water. A low cry from a tar-black clapperboard house at the end of
        one jetty broke the stillness as Widow Jonas slept fitfully, yearning
        for her long-dead husband from her bed of camphor and worn cotton. | ©
        Richard Nicholson Idea #4 Sometimes I go deep, deep inside myself. A
        sort of walkabout for the inner-mind, but it happens almost every month,
        instead of at a significant age. It’s not a natural feeling, and it
        never will be. I hear others talk about their sad moments, and how they
        slip into them as I would slip into a lavender night gown before bed.
        They make it sound so soft, so soothing. Like the slipping is a moment I
        should crave. | © Kayla Haas Idea #5 Mommy, mommy! Puppy! I want puppy.
        PUUUh-pee! | © Phil Temples Idea #6 Will was up until his elbows in
        grease, a smoldering cigarette stump dangling from his lips. His brow
        betrayed firm concentration, his eyes peering at the many parts the
        engine held. | © Martin Hooijmans Idea #7 You sigh. You said that you’d
        do your paper yesterday, but what to write about? You wanted to sign up
        for this class—you didn’t have to Idea #8 yet, here you are on a Sunday
        morning delaying the start of your assignment, the one that you thought
        you’d enjoy. You hear your roommates downstairs playing video games,
        laughing. Perhaps you can go down with your laptop and casually start to
        outline the fictional tale that’s going to wow your peers on Monday. No,
        you know deep down that going downstairs is a bad idea, and you try to
        repress the laughter that you hear echoing from the floor below. Every
        story you think of writing is bleak and depressing. | © Max Cohen Idea
        #9 The forest was filled with the sounds of machines. Rough men with
        chainsaws and loading trucks dominated the area, cutting down the mass
        of pine trees that stretched out for miles. One exquisitely great tree,
        the one they called ‘Lone Pine’, overlooked it all with a mixture of
        pride and sorrow. Pride, for he was the biggest tree, the master of all,
        the one left alone to grow stronger each year. Sorrow, for all his
        companions were taken away every time winter showed its snowy head. Of
        course they were replaced by new ones, but after years and years the
        giant tree did not bother getting too close to any of them anymore.
        Instead, he had become an advisor and leader to the other trees, using
        his size and the strength of his roots to impress. One time, a lady pine
        had been so amazed that she had dropped all her needles in awe. Now that
        was a tale worth telling to the young ones! | © Martin Hooijmans Idea
        #10 I’ve been taking pictures of all the places I used to see you before
        we met. I am reconstructing our narrative. It starts with us in a
        Starbucks. I saw you frowning over the news while I waited for my drink.
        You tossed the paper on the table, shook your head and left, popping the
        collar of your jacket to fight the wind. I read that article. I created
        you from its contents. | © Ben White Idea #11 Just an hour ago Derek’s
        wife Candy felt normal, her arm snaked under his on the sofa as they
        watched CNN. Now she was seated next to him in his silver Honda, her
        head lolling, her eyes shut tight, her teeth clenched when she wasn’t
        blowing out pockets of air. | © Rob Santana
      </article> */}
    </>
  );
};
