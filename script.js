// Existing parallax scroll functionality
document.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var layers = document.querySelectorAll(".layer");

  // Define different speed for each layer
  var speeds = [0, 0.08, 0.05, 0.1, 0.15];

  for (var i = 0; i < layers.length; i++) {
    var speed = speeds[i];
    var offset = -scrollTop * speed;
    layers[i].style.transform = `translateY(${offset}px)`;
  }
});

// Prevent "rubber band" scrolling effect
document.addEventListener(
  "wheel",
  function (event) {
    if (event.deltaY < 0 && window.scrollY <= 0) {
      event.preventDefault();
    } else if (
      event.deltaY > 0 &&
      window.scrollY + window.innerHeight >= document.body.scrollHeight
    ) {
      event.preventDefault();
    }
  },
  { passive: false }
);

// Audio playback functionality
document.addEventListener("DOMContentLoaded", function () {
  const audioElement = document.getElementById("myAudio");

  // Attempt to play audio
  audioElement.play().catch(function (error) {
    console.log("Auto-play failed: ", error);
  });
  audioElement.volume = 0.1;
});

document.getElementById("playButton").addEventListener("click", function () {
  const audioElement = document.getElementById("myAudio");
  audioElement.play();
});

// === New Letter Selection Functionality ===

// Define the letters data
const letters = {
  "7th": `
    <p>24/09/2023</p>
    <p>Hey Nhi,</p>
    <p>
      Can you believe it's been 7 months already? Even though you're all the
      way in Leuven, you're always on my mind. I know studying abroad is a
      big deal and challenging, but if anyone can crush it, it's you. I
      can't wait to hear about all the cool stuff you're getting into and
      the adventures you're having.
    </p>
    <p>
      I know you've been missing Bông. Well, I've put together a little
      digital farm so you can check in on Bông and other anytime you like.
      And I'm thinking of adding a live cam so you can play with them for
      real. Cool?
    </p>
    <p>
      Keep kicking butt over there, and know that I'm always rooting for
      you.
    </p>
    <p>Can't wait to see you again. Our pets and me love you.</p>
    <p>Good night babe,</p>
  `,
  "8th": `
    <p>24/10/2023</p>
    <p>Hey Babeee,</p>
    <p>
      Happy 8-month anniversary! It's amazing how time has flown by. Despite
      the distance between us, our connection keeps growing stronger haha.
    </p>
    <p>
      Everyday I look forward to hearing all the new experiences and adventures
      you've had. You have your way of telling amazing stories.
    </p>
    <p>
      I cherish the moments we spend together,
      watching scary movies through Teleparty or watching you sleep lol. There's something incredibly entertaining about seeing you snoring, even through a screen.
    </p>
    <p>
      Keep shining over there, and remember, I'm your biggest supporter,
      cheering you on from afar.
    </p>
    <p>
      Can't wait for the day we can celebrate in person. Sending lots of
      love from home, our pets, and me.
    </p>
    <p>Good night, and happy anniversary,</p>
  `,
  "9th": `
    <p>24/11/2023</p>
    <p>Hey Babeee,</p>
    <p>
      Happy 9 months! It's crazy how another month just passed.
    </p>
    <p>
      I loved the quiz you made last night. It was fun walking down memory lane, and even when the answer seemed off, we still got it right lol. That just showed how in sync we are.
    </p>
    <p>
      I've been thinking about our last few video calls – they're always the highlight of my day. Your laughter, your stories, they just light up everything. And those random dance you have? Absolutely the best!
    </p>
    <p>   
      I can’t help but drool a little when I see the meals you’ve cooked. Seriously, I would love to eat your food. I wish I could teleport over for dinner every night! But fewer Mì Gói please :D
    </p>
    <p>
      Our virtual movie nights continue to be epic. I swear, they're almost better than being in the same room. Almost, but not quite. I can't wait for the day we can actually share a mattress, a blanket, and a bucket of hot chicken wings.
    </p>
    <p>
      Keep being your amazing self. You're doing great things, and I'm so proud to be your partner.
    </p>
    <p>
      Counting down the days until we meet. Until then, sending you a big virtual hug and lots of love from this side of the screen.
    </p>
    <p>I love you mostest!</p>
  `,
  "10th": `
    <p>24/12/2023</p>
    <p>Hello Lợp, </p>
    <p>Happy 10 months together babiiiii!</p>
    <p>The past 10 months? Let's just say they've been a wild ride—in the best way possible! From our first awkward date to now, it's been a rollercoaster of laughs, adventures, and countless "remember when" moments. </p>
    <p>You've become my go-to for everything, from picking the next movie on our list to deciding what I should have for dinner. We've navigated through our fair share of challenges, but hey, we always come out stronger—and with a hilarious story to tell. So here's to the past 10 months of non-stop fun and endless memories. And the best part? I know there's so much more in store for us.</p>
    <p>ANDD I am so, so, so excited and grateful that you are coming back to Vietnam in just 4 short weeks. We're going to have an amazing time exploring Hanoi and Ho Chi Minh. I've been paying close attention to every dish you've mentioned wanting to try while you're in Vietnam, and let me tell you, I've made a list! From the street foods of Hanoi to the flavorful specialties of Ho Chi Minh City, we're going to embark on a culinary adventure like no other. Let's make sure we don't eat so much that we can't move and end up staying home all day!</p>
    <p>Lastly, I madeee a tshirttttt. </p>
    <img src="assets/Front.png" style="width: 100%;" alt="shirt">
    <img src="assets/Person.png" style="width: 100%;" alt="shirt_2">
    <p>I love you so much more than words can say, and I can't wait to spend the rest of my life with you. I'm so excited to see you again and start our next adventure together. I love you more than anything in the world.</p>
    <p>P.S. I've been planning a surprise party for you when you get back. I'm not going to tell you what it is, but let's just say it's going to be epic. You better be ready to have a good time!</p>
    <p>Looking forward to your seal of approval of my partei plans when you arrive.</p>
    <p>Love you babyyy,</p>
    <p>Your Bi</p>
  `,
  "12th": `
    <p>24/2/2024</p>
    <p>Hey babe,</p>
    <p>Can you believe it's already been a year? Happy anniversary! Just sitting here, trying to put into words how I feel, and honestly, it's a mix of gratitude and a whole lot of love. This year has been something else. A real rollercoaster, but the good kind, where you scream and laugh and want to go again.</p>
    <p>Every laugh, every argument, every quiet moment – they've all been steps on this wild journey. And through it all, your support has been my rock. I'm excited for all the adventures still to come for us.</p>
  `,
  "14th": `
    <p>24/4/2024</p>
    <p>Dear bb,</p>
    <p>Today marks 14 months since we began our journey together. Each day with you adds color and joy to my life. Your laughter always resonates with me, as do the little things you do.</p>
    <p>I appreciate every moment—your tiktok videos that you always remind me to watch, the Taylor Swift songs that you recommend, and your support of my untimely accident.</p>
    <p>'I love you' seems too simple to express my feelings but it’s what I feel every time when I see you.</p>
    <p>Thank you for being my partner, my inspiration, and my support. My love for you grows each month, and I am excited for what our future holds. You are my Queen of Tears bb. I'm down bad for you!</p>
  `,
  "17th": `
    <p>24/7/2024</p>
    <p>Happy 17th Month Anniversary, my bbb!</p>
    <p>Seventeen months together is such a great milestone. I love how you traveled all the way from Belgium to Vietnam just to be by my side for my graduation. Your support and love mean so much to me.</p>
    <p>I know I’ve hurt you at times, like when I left you to go to the airport alone :((((( I regret that deeply, and I’m so grateful you forgave me and gave me another chance.</p>
    <p>Those two weeks we spent together in Ho Chi Minh City were some of the best days I have had in a long time. Watching "Anh trai vượt ngàn chông gai" with you was surprisingly fun, even though I usually don’t enjoy reality shows. Your laughter and enthusiasm made it great. And there’s something so special about sleeping next to you when it rains.</p>
    <p>As we celebrate this special anniversary, I can’t help but look forward to the future with excitement and hope. I can’t wait to be close to you again, to create more beautiful memories, and to keep growing together.</p>
    <p>Thank you for sticking with me, for your patience, and for being the most wonderful person I’ve ever met.</p>
    <p>Here’s to many more months and years of love, laughter, and adventures together. Happy 17th Anniversary, my love.</p>
    <p>With all my heart,</p>
    <p>Your bé ghệ</p>
  `,
  "21th": `
    <p>24/11/2024</p>
    <p>Happy 21st Month Anniversary, my bb!</p>
    <p>Another month together, and I couldn’t be more grateful to have you in my life. These 21 months haven’t always been easy, but they’ve been full of growth, love, and memories I’ll cherish forever. Even when things got tough and we almost reached our breaking point, I never doubted my love for you. Not once. You mean so much to me, bb.</p>
    <p>I still stand by everything I’ve told you before: taking care of yourself, loving yourself, and putting your well-being first. These aren’t just words for me; they’re promises I made to you because I care deeply about you. And I will always want the best for you, even in moments when I might fail to show it perfectly.</p>
    <p>I know I’ve made mistakes and that we’ve had our ups and downs, but every challenge has only solidified how much I want to be with you. I want to learn your love language better, to show you in every way that I’m committed to understanding and loving you the way you need. You’ve shown me patience and love, and I’m ready to keep growing alongside you.</p>
    <p>Every time I think about us, I feel so much hope for the future. I’m excited for the moments ahead—big and small, good and challenging—because I know they’ll all be worth it as long as we’re together. Thank you for being the beautiful, loving, and incredible person that you are. Thank you for choosing me, even on the days when I fall short.</p>
    <p>Here’s to us, bb. Here’s to 21 months of love and to all the months and years still to come. I love you more than words could ever capture.</p>
    <p>With all my heart,</p>
    <p>Your bé ghệ</p>
  `,
  "birthday25": `
    <p>BB's 25th Birthday</p>
    <p>Dear bb,</p>
    <p>Happy Birthday, my loveeee!</p>
    <p>I feel sad that I can’t be with you on your special day again. Being away from you, especially today, makes me miss you even more. Sweden feels cold and quiet without you, but hearing your voice every day makes me feel warm and never lonely.</p>
    <p>Even though we’re apart, you’re always close to my heart. I hope you have a beautiful birthday filled with smiles, love, and everything you deserve (eventhough I can already tell it's been a chaotic birthday haha).</p>
    <p>I miss you much, bb. Can’t wait until the next time I can bearhug you.</p>
    <p>With all my love,</p>
    <p>Your bé ghệ</p>
  `,
};


// Function to display the selected letter
function displaySelectedLetter() {
  const selectedValue = document.getElementById("letterDropdown").value;
  const letterContent = letters[selectedValue] || "<p>No letter found.</p>";
  document.getElementById("letterContent").innerHTML = letterContent;
}

// Automatically display the latest letter by default
document.addEventListener("DOMContentLoaded", () => {
  displaySelectedLetter(); // Load the letter for the default `selected` option
});
