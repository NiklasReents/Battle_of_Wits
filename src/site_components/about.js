import React from "react";
import "../styles.css";

export default function About() {
  return (
    <div className="about">
      <h3 className="padding_element">How to play Battle of Wits</h3>
      <hr />
      <p>
        <h3>General Battle Flow</h3>
      </p>
      <p align="justify">
        The game randomly decides which player gets to act in the first round.
        Each round is timed to 5 seconds and within each round, a player can use
        as many abilities as possible, as long as those abilities have charges
        available (most abilities have only one charge per round and thus can
        only be used once per round) and the player has enough Actionpoints
        (APs) at his or her disposal. A match ends when a player's Hitpoints
        (HPs) are reduced to 0.
      </p>
      <p>
        <h3>Actionpoints</h3>
      </p>
      <p align="justify">
        Each round, a certain amount of Actionpoints (APs) is available to an
        active character (10 APs by default; certain abilities are capable of
        temporarily changing the amount of APs available to the player or
        opponent character). APs are required to use abilities, all of which
        have different AP costs.{" "}
      </p>
      <p>
        <h3>Characters</h3>
      </p>
      <p align="justify">
        <b>General properties:</b> By default, all characters share the
        following traits: <u>Hitpoints (HPs)</u>: 1000;{" "}
        <u>Actionpoints (APs)</u>: 10 per round; Basic <u>Attack</u> Ability
        (Cost: 2 APs): deal between 100-150 damage; can be used up to two times
        per round; Standard <u>Healing</u> Ability (Cost: 3 APs): heal up to 250
        damage; can be used once per round.
      </p>
      <p>
        <b>1. Name: Monopoly Man </b>
        <p align="justify">
          <u>Short Gameplay Characterisation and Description</u>: A high
          risk-and-reward character whose money-based abilities are capable of
          dealing very high damage to his opponent - or himself!{" "}
        </p>
        <p align="justify">
          "A snobbish, entitled and, above all, filthy rich real estate investor
          and casino gambler with a soft spot for golden cutlery. Honestly, a
          real twit! He wants other people to think that he is erudite and
          charitable, but in reality, he is a rather boorish and cold-blooded
          businessman whose burning disdain for poor people ("Why didn't you
          work harder, then?!") and "socialist gadflies" ("'Wealth creation' is
          a noble endeavour! Now stop being envious and get a job,
          ne'er-do-well, you!") is only surpassed by his obsessive hunger for
          dough and moola - well, he has enough of it to literally throw it at
          you! Why did a twit such a him end up in "Battle of Wits"? Well, you
          couldn't image a better foil for the Bearded Socialist, or could you?"{" "}
        </p>
        <p align="justify">
          <u>Special Ability 1</u> "Charity is Cheap" (Cost: 1-10 APs): Throw
          money at your opponent; you can determine how much APs you want to
          spend; the more APs you spend, the higher the damage (starting damage
          100, + 50 damage for each additional AP); be careful not to overspend:
          the higher the amount of APs you spend, the higher the chance that you
          may start with 5 less APs in your next round (1 AP (100 damage): 0%,
          each additional AP: + 5% chance) and your opponent might gain these
          additional APs in their following round to give you some payback!
        </p>
        <p align="justify">
          <u>Special Ability 2</u> "Flip a Coin" (Cost: 6 APs): After clicking
          on the ability, a coin will be flipped, with three potential results:
          "head" (50% chance) deals 400 damage to your opponent, "tail" (30%)
          300 damage to yourself and "edge" (20%) does 0 damage to your
          opponent.
        </p>
      </p>
      <p>
        <b>2. Name: Bearded Socialist</b>
        <p align="justify">
          <u>Short Gameplay Characterisation and Description</u>: A hardy and
          stubborn character with great defensive capabilities who can deflect
          damage back at his opponent!{" "}
        </p>
        <p align="justify">
          "His quest to liberate the downtrodden workers of the world from their
          oppressive masters is a noble one, but the road to true justice and
          equality is paved with mountains of fiery and often excessively
          contrarian pamphlets and the fallout of countless exhausting
          discussions: there is lots of infighting with fellow revolutionaries
          and reformers, may they be communists, social democrats, libertarian
          socialists or anarchists. Sometimes, you are just yearning for a quiet
          day by the sea, far away from the worries of whose agenda item gets to
          be discussed next and for how long. Alas, the fight never stops! The
          Bearded Socialist was forged in the fires of these heated discussions
          and altercations and is more resilient and unyielding than ever. His
          name alone makes all the Monopoly men of this world shiver with fear
          and he moves on without fear, for he is on the right side of history!"
        </p>
        <p align="justify">
          <u>Special Ability 1</u> "Power of the Collective" (Cost: 6 APs):
          Workers of the world, unite! Together, we are strong! Increase your
          defensive capabilities for one round by reducing all incoming damaging
          by 40% and providing a 20% chance of deflecting damage back at your
          opponent.{" "}
        </p>
        <p align="justify">
          <u>Special Ability 2</u> "Revenge of the Oppressed" (Cost: 6 APs):
          Strike back at the oppressors of the world with revolutionary fervour!
          The more damage you take, the stronger this ability gets. The damage
          you take is directly translated into an ability charge, up to a damage
          cap of 600. Excessive damage over 600 does not translate into another
          charge. You only have one charge until you use this ability. After
          unleashing "Revenge of the Oppressed", it gets charged again by taking
          damage! As a set-off, in the round after unleashing this ability, you
          will only have 5 seconds to choose your next moves.
        </p>
      </p>
      <p>
        <b>3. Name: Philosopher King</b>
        <p align="justify">
          <u>Short Gameplay Characterisation and Description</u>: Sophisticated
          character who deals mostly moderate damage but excels at trolling his
          opponents and throwing them off-balance with his refined oratory
          skills!
        </p>{" "}
        <p align="justify">
          "What a royal smart-ass! Really, what a smug bastard! Yes, a real
          human gadfly seizing every opportunity to goad innocent people into
          presumably high-minded discussions, pestering them with tricky
          questions while aggressively feigning ignorance and ultimately
          reducing their flawed assumptions to absurdity with the help of
          relentlessly methodical questioning. His favourite pastimes include
          corrupting the youth with his dangerous ideas and calling everybody he
          deems inferior "barbarian". Nonetheless, he is still arguably the best
          person to talk to if you have a thing for perfect "shapes" and
          "forms"!"{" "}
        </p>
        <p align="justify">
          <u>Special Ability 1</u> "Question Time" (Cost: 6 APs): Totally
          confound your opponent with your superior brainpower by perforating
          (!) them with piercing questions; This attack unleashes a shower of
          damaging question marks (10x 30 damage) that linger for 2 additional
          rounds on the battle field, dealing moderate damage to the opponent
          once every round (20 damage per remaining question mark). They can be
          removed by clicking on them, which will cost your opponent a few
          seconds. Beware: by using this ability, you may get totally lost in
          your rambling train of thought and there is a chance of 25% that you
          gift your opponent an additional round!{" "}
        </p>
        <p align="justify">
          <u>Special Ability 2</u> "Realm of Ideas" (Cost: 5 APs): Plunge your
          opponent into a state of utter confusion and metaphysical bewilderment
          by giving them a blindingly shimmering glimpse of the Realm of Ideas!
          In the next round, your opponent will take 25% more damage from all
          your attacks and will generally deal 20% less damage. In addition,
          their attacks will have a 25% chance of missing, effectively dealing
          no damage.
        </p>
      </p>
    </div>
  );
}
