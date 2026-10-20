export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "incrementality-retention",
    title: "Your Email Dashboard Counts Wins You Would Have Gotten Anyway: Why Incrementality Is the New Retention Metric",
    excerpt: "I used to report win-back numbers with a straight face: 200 buyers, a 20% conversion rate. Then I asked how many would have bought anyway.",
    date: "2026-10-20",
    category: "AI & Growth",
    readTime: "6 min read",
    content: `
I want to tell you about a number I used to report with a straight face.

We would send a win-back email to 1,000 lapsed customers. About 200 would buy within the week. The dashboard would call it a 20% conversion rate, and I would present it as a win. Nobody asked the awkward follow-up, least of all me: how many of those 200 were going to buy anyway?

Say the honest answer is 150. Then the email did not create 200 sales. It created 50. The other 150 were going to happen with or without us, and the dashboard quietly took the credit.

There is a name for the real number: incrementality. And if the product news from the first half of October is anything to go by, it is about to become the number growth teams get judged on.

## What just happened

Three things landed within about a week of each other, and together they tell one story: holdout testing is being built into the tools marketers actually use.

A holdout test is not complicated. You leave a small, random group of customers out of a campaign, then compare what they did with what the contacted group did. The gap is what the campaign actually caused. Everything else is decoration.

On October 7, Google opened self-serve Conversion Lift studies to Search and Performance Max campaigns. The studies hold out users who never see the campaign, and the gap estimates the conversions the campaign truly added. There is a catch, and it is a real one: you need at least 1,000 observed conversions and a $5,000 minimum campaign budget to play. Smaller teams are locked out.

On October 15, a customer engagement platform called Optimove shared the first customer results from its AI product. One operator ran 44 real-time triggered activations reaching 354,000 player touches, each one measured against a control group. A content-only reactivation test produced 13.8% more deposits per 1,000 targeted players. Honestly, the numbers are not the interesting part. The interesting part is that they were reported against control groups at all. That is what lets a buyer check a vendor's homework.

On October 14, a measurement company called Lifesight rebuilt its platform around AI agents. The company says its scientists approve each model before it goes live, and that marketers keep control of budget decisions. It also says it serves more than 500 brands, though that is the company's own figure, not an independent count.

None of these is a small tweak. Together, they signal a shift in what counts as proof.

## Why your dashboard counts phantom wins

Most dashboards run on attribution. Attribution is just a rule for assigning credit: the sale goes to whichever ad or email the customer touched last. It is a bookkeeping rule. It was never a test of what caused the sale.

Incrementality asks a different question: what would have happened if we had done nothing? That is the only question that tells you whether the money was well spent.

And the gap between the two can be uncomfortably large. Holdout studies covering dozens of direct-to-consumer brands put median retargeting incrementality near 28%. In plain terms, roughly 7 in 10 conversions the ads claimed were not caused by the ads at all. A separate reported study from a large social platform, across 15 advertisers, found only 34% of attributed conversions were genuinely incremental.

I would treat those as reported figures, not settled science. They come from vendor and marketing sources, not independent research. Your number could be better. It could also be worse. The only way to know is to run the test yourself.

Where this bites hardest is discounts. A 20%-off win-back email converts beautifully. But if that customer was about to pay full price, you have just handed over margin and learned nothing. The question is not "did the order happen?" It is "was the order worth the margin I gave away?"

## The test itself is simple

I always compare it to a medicine trial. Half the patients get the pill, half get a sugar pill, and you compare who got better. A holdout test is the same idea, applied to your email list.

Pick a segment. Set aside 5 to 10% at random. Send them nothing. Compare purchase rates. Two things keep it honest: the split has to be genuinely random, not "the customers we like least," and the holdout group cannot quietly get the same offer through another channel during the test, or the comparison falls apart.

One more thing I have learned to say out loud in rooms: attribution is how you run the day to day, but incrementality is the audit. You need attribution to operate. Without a holdout test now and then to check it, though, it drifts into fiction. And when a test gives you a number, resist the urge to multiply it across your whole attribution report. Finance will ask how you got there, and "we scaled the test result" is not an answer that survives the meeting.

This applies to the newest channels too, by the way. Before paying commission on orders an AI assistant supposedly sent you, run a holdout and see how many of those orders your existing channels would have closed anyway. Some of these assistants are collecting rent on demand you already earned.

## What I would do now

1. Run one holdout on your biggest recurring send. Your monthly win-back, your cart-recovery flow, your biggest loyalty email — pick one. Hold out 5 to 10% for one cycle. An email holdout needs no budget, only randomization. That is its big advantage over paid media.

2. Read the gap, not the open rate. Opens and clicks tell you who noticed. The holdout gap tells you who actually moved.

3. Put your discounts through the margin question. For each recurring offer, ask: was the order incremental enough to justify the margin? Retire the ones that fail. Keep the ones that pass, and keep them with confidence.

4. Ask every vendor one question. If a platform reports a lift, ask: against what control group? The better vendors are already answering this. Make it a condition of buying.

And the timing is genuinely good. A holdout run in late October tells you how much of your retargeting is real before Black Friday, the most expensive week of the year to be wrong. A dashboard that counts phantom wins does not just mislead you. It talks you into spending more on the illusion.

Sources: WebProNews (Oct 7, 2026); AgileBrandGuide (Oct 15, 2026); AgileBrandGuide (Oct 16, 2026); OmniConvert; CloseRev; AdBeacon.
`,
  },
  {
    slug: "crm-that-updates-itself",
    title: "Your CRM Is Rotting While You Read This: Why the Next Growth Edge Is a Customer Database That Updates Itself",
    excerpt: "Nothing went wrong with your offer. Your customer list did. It went out of date while no one was watching.",
    date: "2026-10-15",
    category: "AI & Growth",
    readTime: "4 min read",
    content: `

You send a win-back offer to a loyal customer. It bounces. You call the number on file. It belongs to someone else. She moved six months ago, and your system never noticed.

Nothing went wrong with your offer. Your customer list did. It went out of date while no one was watching.

That quiet decay is behind a new idea in growth this week: a customer database that updates itself.

## What just happened

On October 14, one news piece described a startup building just that. Its AI agents research prospects, fill in missing details, and keep records fresh on their own.

Here is what the company describes. You tell the system what kind of customer you want. Its agents search many sources to build a list of matching contacts. Then they keep watching for changes, like job moves, promotions, and funding rounds, so records stay current.

The company says its system can draw on more than 100 third-party sources. It also says it uses a waterfall check for verified contact details. A waterfall check is simple: try one source, and if it gives no usable email or phone number, try the next one, until one works.

Those are company descriptions, not independent test results. No outside check in the piece verified accuracy, cost, or how fast updates appear.

The company also says customers reported cutting prospecting time by as much as 70%. That is a customer-reported claim, not a measured result. Treat it as a promise, not proof.

One more detail. The technology behind the database is not open-source today. The company says it plans to make it open-source in early 2027, subject to security reviews. For now, it is only available to a limited audience.

## Why your list goes stale so fast

CRM is short for customer relationship management. It is the system where you keep customer details: names, emails, phones, addresses, and purchases.

People change. They change jobs, phones, emails, and homes. Each change makes one more record wrong.

One data vendor measured job changes directly in its own database, re-run in September 2026. It found 12.25% of US sales leaders changed roles over 12 months, and 25.67% over 24 months.

That counts job changes only. It leaves out changed phone numbers, emails, and addresses. So the share of records wrong in some way is higher.

For B2C teams, the same rot looks different. A customer changes her phone and stops getting delivery updates. A loyalty member changes email and misses your birthday offer. A family moves and keeps getting offers for the old neighbourhood. Each miss feels small. Together, they look like customers losing interest, when really your data lost track of them.

## What a self-updating database promises to do

A normal customer list is a snapshot. Someone types in details once, and the record sits there until a human fixes it. Most teams never have time.

A self-updating database flips that. Software agents watch for changes and fix records on their own.

For growth teams, that could mean less wasted outreach, better timing, and cleaner retention. Fewer bounced emails. A faster response when a move signals someone is ready to buy again. Loyalty offers that still reach the right person.

## The catch: a promise is not proof

The system promises continuous updates. But accuracy still needs verification before outreach. A wrong "update" can be worse than an old record, because it looks fresh. It can send a personal offer to the wrong person.

So keep one rule: a human approves before outreach. Let the AI suggest the update. Let a person check it before a message goes out, at least for your most valuable customers.

Price is another open question. The news piece does not say what the system costs, or how quickly updates reach your system. Those details have not been independently verified, and the only test that counts is your own data, on your own customers.

## What growth teams should do now

You do not need to buy a new system this week. Start with four steps.

1. Measure your own rot. Pull 50 customer records at random. Check how many have a working email, phone, and current address. If more than a few fail, your list is costing you sales.

2. Set one freshness rule. Verify contact details before any high-value offer goes out. No check, no send.

3. Treat change as a signal. A customer who moves or changes phone is telling you something. Build one simple play for it, like a "we missed you" check-in.

4. Keep a human in the loop. Use AI to find and suggest updates. Use people to approve them before they trigger messages. Speed is useful. Trust is worth more.

Your list will never stay perfect on its own. But the teams that win will be the ones whose data keeps up with real life. The database that updates itself is not here yet for most teams. The habit of keeping data fresh can start today.

Sources: TechCrunch (Oct 14, 2026); Lusha.
`,
  },
  {
    slug: "agentic-analytics",
    title: "Your Dashboard Will Soon Tell You Why, Not Just What: Agentic Analytics and the End of the Monthly Growth Report",
    excerpt: "That gap — between seeing a number move and knowing why it moved — is the slowest part of growth work.",
    date: "2026-10-14",
    category: "AI & Growth",
    readTime: "4 min read",
    content: `

It is Monday morning. Your retention rate fell four points last week. Your dashboard shows you the drop in bright red. It does not tell you why it happened, which customers left, or what to do about it.

So your team does what teams always do. Someone pulls the data. Someone else builds a slide deck. A week later, you have an answer to a question that mattered last week.

That gap — between seeing a number move and knowing why it moved — is the slowest part of growth work.

## What just happened

On October 12, Salesforce signed a deal to acquire Loops, a small AI analytics company. The deal is signed, but it has not closed yet. Salesforce expects it to close in early November, subject to the usual closing conditions.

The plan, after close, is to bring Loops' technology and team into Tableau, Salesforce's analytics platform. The price was not disclosed.

Loops does something different from a normal dashboard. It watches your key numbers on its own, all the time. When a number moves, it tries to explain why. Then it suggests what you could do next. It can even reach you through workplace chat and email, so you do not have to open a dashboard first.

## What "agentic analytics" actually means

"Agentic" is a word you will hear a lot this year. Here it means simple: the software acts on its own, instead of waiting for you to click.

Think of the difference between a thermometer and a smoke detector. A thermometer shows a number when you look at it. A smoke detector watches on its own and shouts when something is wrong. Most dashboards today are thermometers. Agentic analytics wants to be the smoke detector.

It works in three steps:

1. Watch. It keeps an eye on the numbers that matter for growth: sign-ups, repeat purchases, churn (customers leaving), and revenue per customer. These are often called KPIs, short for key performance indicators.
2. Explain. When a number moves, it looks for likely drivers. Maybe new customers from one ad campaign are leaving faster. Maybe a change to the checkout page hurt repeat orders. It ranks the most likely reasons.
3. Suggest. It points to the next step worth testing, like fixing an onboarding step or shifting spend to the campaign that keeps customers longer.

For a B2C growth team, that changes the weekly rhythm. Instead of spending Monday building a report about last week, you spend Monday deciding what to fix this week.

## The catch: an explanation is a guess, not proof

Here is the part worth slowing down on. When an AI system says "this is why your number moved," it is giving you a ranked, model-based guess. It is not giving you a proven cause.

Loops describes its approach as using causal analysis — a way of sorting likely causes from coincidences — to rank the drivers of a change. Independent coverage notes those causal claims have not been independently validated. In plain terms: nobody outside the company has checked whether its "why" answers hold up.

That does not make the tool useless. It makes human judgment more important, not less. A plausible explanation is not the same as a true one. Two things can move at the same time without one causing the other.

And the quality of the answer depends on the quality of the data underneath it. If your purchase data, app data, and support data do not line up, the AI will confidently explain a picture that is partly wrong. Garbage in, confident-sounding explanation out.

So treat the AI's "why" like a strong lead from a smart colleague. Check it before you act on it. Run a small test. Look at the raw numbers for the group it blames. Then decide.

## What growth teams should do now

You do not need to wait for this deal to close, or for any one product to ship. The shift is already clear: reporting is moving from "what happened" to "why it happened, and what to try next." Here is how to get ready.

1. Pick five numbers and watch them daily. Sign-ups, activation (customers who actually use what they bought), repeat purchase rate, churn, and revenue per customer. If you only review them monthly, you are already late.

2. Write down the "why" before the tool does. When a number moves, ask your team: what changed in the last two weeks? Keep a simple log. It becomes the test for any AI explanation later.

3. Set one rule for acting on AI explanations. For example: no change to pricing or onboarding ships on an AI explanation alone. It needs one human check and one small test first. That rule protects you from acting on a confident guess.

4. Fix your data plumbing before you buy more AI. If the same customer looks different in three systems, fix that first. Agentic analytics is only as good as the data it watches.

The monthly growth report is not going to vanish tomorrow. But its job is shrinking. The teams that win will be the ones who find out why a number moved on Monday — and fix it by Friday.

Sources: Salesforce announcement (Oct 12, 2026); CXO Voice; BTW Media; MarTech.
`,
  },
  {
    slug: "price-is-a-variable",
    title: "Your Price Is a Variable, Not a Number: What McDonald's AI Pricing Engine Teaches Growth Teams About Personalized Pricing",
    excerpt: "Price is no longer one fixed number. It is a variable.",
    date: "2026-10-13",
    category: "AI & Growth",
    readTime: "4 min read",
    content: `

On 2 October 2026, a proposed nationwide class action was filed in federal court in Chicago. It claims a large restaurant chain used an algorithm to coordinate menu prices across company-owned and franchised restaurants. The chain rejects the claims.

The lawsuit cites a Reuters investigation from 29 September 2026. That investigation described a machine-learning pricing system used across the chain's U.S. restaurants. The lesson for every B2C growth team is clear. Price is no longer one fixed number. It is a variable.

## What the engine reportedly does

Machine learning is a type of AI that finds patterns in large amounts of data. According to Reuters, this chain has used such a system since at least 2019. It was built and run by Tiger Analytics, according to two former employees.

The system crunches millions of daily transactions across nearly 14,000 restaurants. It produces what the company calls an "optimal price" for each item at each location. Optimal here means the price the model thinks will work best.

One input is price sensitivity. That is a simple idea: how much will demand fall if the price rises? A franchisee-facing screen reviewed by Reuters read, "Your restaurant is showing MEDIUM SENSITIVITY to Price." It cited, in part, the "willingness to pay of customers in your area." The engine also pulls public price information from competitors' online menus.

Here is a concrete example. Reuters checked the chain's app in September. A Big Mac at a company-run store in Fresno, California, sold for $5.69. Another company-run store about two miles away sold it for $6.89. That is a 21% premium. Reuters could NOT confirm the engine caused that gap. The gap is real. The cause is not proven.

Franchisees told Reuters the engine has widened price gaps between stores, including from neighborhood to neighborhood. Five franchisees said the company pressured them to use the AI pricing tools.

## The other side of the story

McDonald's strongly disputes the picture above. Its position is clear: "AI does not set the price of a Big Mac or any other menu item. It does not change prices. And it does not determine what an individual customer pays."

The company says franchisees independently set prices. The portal is "a tool, not a mandate." It called the Reuters reporting "speculative and uninformed."

A fair post must carry both sides. Reuters describes a powerful engine, based on screenshots and interviews with nine sources. McDonald's says the engine only advises, and humans decide.

The same Reuters report notes that Yum Brands is also turning to AI for pricing and other operations. Yum owns KFC and Taco Bell. It did not respond to a request for comment. The trend is wider than one chain.

## The trust problem: customers notice when they feel sorted

Dynamic pricing means prices that change based on demand, time, place, or other signals. Airlines and hotels have used it for years.

In 2024, another fast-food chain faced backlash after its CEO talked about testing "dynamic pricing." The company said its comments were misconstrued.

In December, a grocery platform ended a limited test of AI tools that showed different grocery prices to different shoppers, after criticism from consumers and lawmakers. The platform said it will never use personal data to determine prices.

The lesson is simple. Customers accept that prices differ by city or store. They push back fast when they feel sorted into groups.

Antitrust law is the other risk. Antitrust means the rules against companies working together to fix prices or limit competition. The new lawsuit claims the tool coordinated prices across company-owned and franchised restaurants using non-public pricing data. The chain rejects that claim.

## What B2C growth teams should do now

1. Decide what you will never personalize on. Do not set prices based on one customer's identity, income, or personal data. Use store-level signals instead.

2. Explain the price in plain words. If prices differ by location, say so. Explain what drives the difference, such as rent or local costs. Silence invites suspicion.

3. Track trust, not just revenue. Watch complaints, refunds, app reviews, and social posts after any price change.

4. Keep a human in the loop. Let AI suggest. Let a person decide. Log every change: who approved it and why.

5. Test fairness before launch. Ask: would our best customer still feel treated fairly if they saw this price next to another customer's price? If no, do not ship it.

Price has always shaped growth, loyalty, and retention. AI just makes it faster, more precise, and more visible. The teams that win will treat price as a trust decision, not just a math problem.

Sources: Reuters investigation (via Channel News Asia; via DevDiscourse); class action coverage (Asianet News; SE Daily).
`,
  },
  {
    slug: "churn-dashboard-wrong-numbers",
    title: "Your Churn Dashboard Is Watching the Wrong Numbers",
    excerpt: "Most churn dashboards look calm right up until the cancellation email arrives.",
    date: "2026-10-12",
    category: "AI & Growth",
    readTime: "3 min read",
    content: `

The 3 behavior signals that predict AI agent churn weeks before renewal season hits


A quick note on sources. This post builds on a practitioner piece published this morning on Startup Fortune, "How to Predict AI Agent Customer Churn Before Renewal Season Hits." It's written in first person by someone who has worked with B2B AI companies — an opinion piece grounded in experience, not a research study. The ideas are worth your time; where the caveats matter, I've said so below.


Renewal season is the worst time to learn an account was dying.

Most churn dashboards look calm right up until the cancellation email arrives. Green logins. Flat weekly usage. A decent NPS score — that's Net Promoter Score, the "would you recommend us" survey rating. Then the renewal call comes, and the customer says: "We've decided to move in a different direction."

That gap — between what the dashboard shows and what the customer decides — is the real problem. Here are three behavior signals that close the gap, weeks before the renewal call.

## 1. Count weekly active seats, not logins

When 30% of the seats inside an account stop showing up each week, that's a louder alarm than any survey score. That 30% figure is the article author's rule of thumb, not a research finding — but the instinct behind it is solid.

Why? Because seat counts show breadth of adoption. If an account bought 20 seats and only 12 people still use the product weekly, the other 8 already voted. They just haven't told anyone yet.

For B2C subscription teams, the parallel is simple. Don't watch total logins. Watch how many of your paying accounts still have active users, week over week.

## 2. When tasks stop getting done, users are giving up

Here's a subtle one. Sessions stay flat — people still open the product. But the rate at which tasks actually get completed starts falling.

That combination means something specific: users are opening your product and giving up. They log in, try, fail, leave. A login-based dashboard sees engagement. A completion-based dashboard sees frustration.

This is the difference between "how often do they show up" and "did they get what they came for?" Track the second one.

## 3. The lone power user hides a dying account

Sometimes one heavy user keeps the whole account's numbers looking healthy while everyone else quietly stopped logging in months ago. The author calls it "power-user masking." The article also cites Vitally's churn research, which flags exactly this pattern — concentrated usage — as a predictor of non-renewal.

The fix is easy: break usage down by user, not just by account. If one person is doing most of the work, your account health is really that one person's happiness. And people change jobs.

## Start renewal conversations earlier than feels necessary

The author's framing: have the renewal conversation 90 days out, not 30. By day 30, the decision is usually made. By day 90, you can still change it.

There's a verified number behind the same instinct. Gainsight's own retention-analysis guide reports that accounts sitting below a 40-out-of-100 health score for two consecutive months churn at roughly three times the portfolio average. Note what that stat actually measures: sustained low health, not a falling usage curve. The article also mentions a "declining-usage accounts churn 2–3x more" figure as Gainsight's 2024 customer data, but I couldn't verify an original Gainsight source for it — so treat it as the author's claim, and use the health-score figure as the verified one.

## What to do this week

1. Add a weekly-active-seats alert to your churn dashboard, with a 30% drop as the trigger line.
2. Put task completion rate next to session counts in your reports. Flat sessions plus falling completions equals a red flag.
3. Break account usage down per user once a month, and flag accounts where one person does most of the work.
4. Start the renewal conversation 90 days before the date, not 30.

Your dashboard isn't lying. It's just answering the wrong questions.

Sources: Startup Fortune; Gainsight retention analysis guide.
`,
  },
  {
    slug: "ai-roi-measurement-gap",
    title: "You're Spending More on AI Than You Can Prove",
    excerpt: "Companies are pouring money into AI they cannot grade.",
    date: "2026-10-11",
    category: "AI & Growth",
    readTime: "3 min read",
    content: `

Your customer teams use AI for almost everything now. Writing emails. Scoring accounts. Summarizing calls. The time savings are real: 81% of leaders say AI cut their manual work.

But here is the uncomfortable question: what did those savings actually buy you?

A new study of 580 customer success and revenue leaders found that about half have no consistent way to measure AI's impact. Among customer success leaders, the number is worse — 63% lack a consistent measurement method. And only 21% connect what they do measure to revenue.

Say it plainly: companies are pouring money into AI they cannot grade.

## AI spending is protected. People are not.

When budgets grow, 70% of teams put the extra money into AI tools. When budgets shrink, 59% cut headcount — while only 27% cut AI spending.

It is like hiring an employee, giving them a raise every year, and never doing a performance review. That is how most companies treat their AI.

AI is already shaping who stays. Among teams that reduced roles, 52% said AI and automation absorbed the work, compared with only 14% who pointed to budget pressure.

## The teams that measure win on retention

Net revenue retention — NRR for short — is the share of revenue you keep and grow from your existing customers each year, counting upgrades minus cancellations. Above 100% means your current customers are spending more, not less.

Across the board, NRR has been flat since 2024. AI has not moved it — yet.

But 65% of the most AI-mature teams reported NRR of 100% or higher. The catch: only 16% of leaders rate their organizations at that strategic level. The rest are "tactical" — AI helps with tasks, but it never steers decisions.

So the tools are table stakes now. What separates teams is measurement. You cannot steer what you cannot see.

## You can't trust what you can't measure

Four out of five teams stop AI short of strategic decision-making. And teams that cannot measure AI's impact are four times more likely to require a human to approve every single AI recommendation.

This is the hidden cost of the gap. If you can't prove the AI's results, you can't let it act alone. If it can't act alone, you never get the scale you bought it for.

It is like buying a self-driving car and keeping your hands glued to the wheel. You are paying for the feature. You are just never using it.

## What B2C growth teams should do this week

This study is about B2B teams, but the pattern travels: loyalty programs, subscription apps, retention marketing — anywhere AI touches customers.

1. Pick one AI use case and one money metric. One tool, one number it should move: repeat purchase rate, churn, or average order value.
2. Write down the "before." No starting line, no proof of a lift.
3. Decide where AI can act alone. Set clear guardrails, then let it run inside them — and measure what happens.
4. Tie your next AI budget to proof, not promise. Let spend grow where results show up.

One honest caveat: this study comes from an AI platform that sells to customer teams, and every answer was self-reported. Vendor research tends to flatter the vendor's view of the world. But the core finding — spend growing faster than proof — is something most leaders will quietly admit is true.

The teams that learn to measure first will be the ones whose AI actually moves retention. Everyone else is just buying a faster treadmill.

Source: ChurnZero 2026 Customer Revenue Leadership Study (580 leaders; self-reported). Release via PR Newswire, Oct 6, 2026.
`,
  },
  {
    slug: "loyalty-program-chat-window",
    title: "Your Loyalty Program Just Moved Into the Chat Window",
    excerpt: "The loyalty program is leaving the app. It is moving into the conversation.",
    date: "2026-10-10",
    category: "AI & Growth",
    readTime: "4 min read",
    content: `

Imagine this. Your best customer never opens your app this month. Never visits your website. Never sees your email.

And yet they earn points, redeem a reward, and get a surprise birthday treat — all inside a chat window, through a conversation with an AI agent.

This is not a far-off idea. It is already happening.

On September 29, a new AI-powered loyalty platform called Pointics launched for online stores. It lets shoppers earn and redeem points the usual way. But its roadmap has something more interesting: it plans to let AI assistants and agents connect to your loyalty data. Soon you could ask, "Which customers are close to their next VIP tier?" or "Who has points sitting unused?" — and get an answer in plain words, not a spreadsheet.

Meanwhile, back in April, a UK grocery chain teamed up with a major software company to put agentic AI inside its loyalty program. That means the AI does not just answer questions. It takes actions: it can spot the right moment to offer a reward and trigger it.

The loyalty program is leaving the app. It is moving into the conversation.

## The chat window is the new front door

People now shop by chatting. They ask an AI assistant which running shoe to buy. They ask it to reorder the dog food. They ask it to compare prices.

A 2025 shopping index from Klaviyo found that 68% of consumers prefer AI for instant answers, 56% prefer AI for personalized recommendations, and 48% prefer AI for post-purchase support. PYMNTS research found that more than 6 in 10 US consumers used AI platforms like ChatGPT, Claude, or Gemini in the past year.

Here is the part that should worry loyalty managers: more than half of AI users would rather complete a purchase inside the AI platform than get sent to a merchant's website.

Think about what that means. If your points, tiers, and rewards only live on your website, they are invisible at the exact moment a customer decides what to buy.

## From points on a shelf to rewards that come to you

Loyalty used to be passive. You collected points. They sat on a shelf. Maybe you remembered to use them. Most people did not. Industry research shows only about half of loyalty members actively engage with their programs.

AI agents flip this around. Instead of the customer remembering to check their balance, the agent remembers for them. It notices you have 2,300 points. It notices a reward you qualify for is about to expire. It mentions it while you are chatting about something else entirely.

That is a small change in words but a big change in behavior. Redemption goes from a chore to a pleasant surprise. And redemption matters: when people actually use rewards, they come back. Loyalty members drive 12%–18% more annual revenue than non-members, according to industry statistics. The hard part was never the points. It was getting people to use them.

## Agents that notice when a customer is drifting away

The most powerful use of AI in loyalty is not rewards. It is noticing.

Right now, "silent churn" — customers who stop buying without complaining — is one of the hardest problems in retail. By the time you see it in a monthly report, the customer is gone.

An AI agent watching the chat channel can catch the early signs: the customer who used to order weekly now orders monthly. The one who always bought premium now buys the cheapest option. The one whose last three chats sounded frustrated.

With the loyalty data in front of it, the agent can act right there in the conversation — a gentle nudge, a bonus for coming back, a question about what went wrong. Not a generic "we miss you" email three months later. A response in the moment, in the channel the customer is already using.

## What changes for your growth team

Three things.

First, your loyalty data must be machine-readable. If your points, tiers, and rewards live in a closed system that only your app can read, no AI agent can work with them. The winners will be brands whose loyalty programs an agent can ask about and act on.

Second, stop measuring loyalty like a filing cabinet. Old metrics: how many people signed up, how many points are outstanding. New metrics: how many rewards were redeemed inside a conversation, how many drifting customers were rescued in the chat window, how much of your revenue started inside an AI chat.

Third, keep the human feel. People like chatting with AI, but they still want it to feel like the brand. The agent should know the customer's name, their tier, their favorite products — and act like someone who has been paying attention, not a vending machine.

## The takeaway

The loyalty program of the next five years will not be a card in your wallet or a tab in an app. It will be a conversation. Customers will ask an AI what they should buy, and the AI will quietly fold in their points, their tier, and the reward that is about to expire.

The brands that win will not be the ones with the most generous points. They will be the ones whose loyalty programs show up in the chat window — at the exact moment the decision is made.

Sources: Pointics launch announcement (Sept 2026); Klaviyo; PYMNTS; 99minds; WiserReview.
`,
  },
  {
    slug: "fake-real-time-is-over",
    title: "Fake Real-Time Is Over: Live 1:1 Personalization and the New Rules of Retention",
    excerpt: "If the action was decided beforehand, executing it a millisecond after a trigger does not make the decision real-time.",
    date: "2026-10-09",
    category: "AI & Growth",
    readTime: "5 min read",
    content: `

Something big happened in marketing tech this week, and most growth teams missed the headline behind the headline.

On Thursday, October 8, customer engagement platform CleverTap launched the next version of its AI product, CleverAI. It is built around what the company calls "Live 1:1 Personalization." But the launch matters less than the argument behind it: most of what the industry calls "real-time" marketing is not real-time at all.

As CleverTap's co-founder and CMO Anand Jain put it: "If the action was decided beforehand, executing it a millisecond after a trigger does not make the decision real-time."

Read that twice. It is the single most important sentence in growth analytics this week.

## Your "real-time" marketing is already too late

Here is how most personalization works today. A customer browses sneakers on Tuesday. On Thursday, they get an email about sneakers. The system calls this "triggered" and "real-time." But nothing about the decision was live. The rule was written days ago. The content was picked in advance.

The customer, meanwhile, has moved on. Maybe they bought elsewhere. Maybe they changed their mind. The message arrives like a taxi that shows up after you have already hailed another one.

The problem is not speed of delivery. It is timing of the decision. Deciding faster on stale information is still stale.

## Deciding in the moment, not just acting fast

The new generation of CleverAI attacks this with two engines working together. The first, TesseractDB, keeps one living record of each customer — their whole history plus what they are doing right now. The second, a decisioning engine, uses that record to decide, afresh, what this customer should see next: what experience, through which channel, at this exact moment.

The key detail: the decision respects goals and guardrails the marketer sets, and every outcome becomes part of the record for the next decision. It is a learning loop, not a rulebook. The system does not wait for data to sync across five tools, by which time the customer has moved to the next thing.

This is not theory. Digital retailer The Very Group reported this week that after a month using a similar real-time decisioning approach — over 800 behavioral signals predicting shopper intent in the session — revenue per customer rose by a fifth in one strategy, and overall conversion improved. Another platform, Treasure AI, launched a "Personalization Studio" on October 6 that lets marketers build live website experiences directly from customer context, no developer handoffs required. It even changed its pricing to match: email costs tied to clicks, not messages sent.

The pattern is clear. The industry is moving from fast delivery of pre-decided actions to genuinely live decisions.

## Stop predicting buyers. Start predicting impact.

Here is the second big shift hiding inside this week's news, and it is worth explaining carefully.

For years, growth teams have used propensity models. Propensity simply means the likelihood that a customer will act — buy, renew, upgrade. Target the customers most likely to buy, and your campaign numbers look great.

But there is a trap. Some of those "likely buyers" would have bought anyway. Your discount just gave them money for something they were already going to do. That is not growth. That is a handout.

Uplift modeling is different. It predicts which customers will act because of your intervention — and which intervention actually changes their behavior. It is the difference between predicting the weather and predicting whether your umbrella offer changes what someone does.

Think of a coach. Propensity says: praise the players who are already fired up. Uplift says: find the players whose effort changes because you talk to them. That is where the return is.

CleverTap says its new AI is designed around exactly this: find where an intervention creates incremental impact, not just who looks most likely to convert.

The pilot numbers, from the company's own reports this week, are striking:

- A bank, Axis Bank, cut drop-off in its conversion funnel by 27%.
- At restaurant platform Eatigo, diners who got a personalized recommendation converted at twice the rate, in a controlled experiment.
- Streaming service VieON saw engagement rise 10%, checkout actions rise 12%, and push notification clicks double.

Treat vendor-reported numbers with care — they are early and self-reported. But the direction is consistent: targeting impact, not likelihood, moves the numbers that matter.

And the numbers need moving. Jain reminded audiences this week of an old finding from the company's early days: brands once lost 90% of acquired users by the third month. Acquire 100, keep 10. "Everything went from 'help me do more' to 'help me do right,'" he said — from productivity to outcomes.

## The trust price

There is a catch, and honest growth teams should face it. Personalization runs on customer data, and customers are watching.

Recent industry data shows more than 83% of customers will share their data in exchange for a truly personalized experience. But 58% say they see recommendations they do not want, and 28% dislike brands using information they never shared.

In other words: customers will pay for relevance with their data, but irrelevant or creepy personalization burns that currency fast. The CleverAI launch includes explainability tools, frequency controls, user-level inspection, and data clean rooms — the machinery that keeps a live-decision system from becoming a spam cannon. That machinery is not a nice extra. It is the price of admission.

## What growth teams should do this week

1. Audit your "real-time." For every "triggered" campaign, ask: was the decision made live, or just the delivery? If the action was decided beforehand, it is not real-time. Name it honestly.

2. Measure uplift, not just clicks. Hold back 5–10% of your audience from the AI-driven experience. That control group tells you what the AI actually added, instead of letting the system take credit for buyers who would have converted anyway.

3. Shift budget from propensity to uplift. Before your next retention campaign, ask your team one question: are we targeting people who will buy anyway, or people whose minds we can change? The first group makes reports look good. The second grows the business.

4. Set guardrails before speed. Frequency caps, explainable decisions, and clean data handling come before any live-decision system. Trust is the channel everything else runs through.

Fake real-time is over. The teams that win the next wave of retention will not be the ones with the fastest triggers. They will be the ones that decide afresh, customer by customer, moment by moment — and can prove the difference they made.

Sources: Economic Times; ETBrandEquity; Storyboard18; Intelligent Retail; Treasure AI; DemandSage.
`,
  },
  {
    slug: "ai-engaged-shoppers",
    title: "Your Best Customers Are Already Using AI — Just Not for Shopping Yet",
    excerpt: "More than 30% of US households now use AI every week. But only about 1 in 10 use AI while shopping.",
    date: "2026-10-16",
    category: "AI & Growth",
    readTime: "4 min read",
    content: `
A new index launched this week shows something growth teams should not ignore. More than 30% of US households now use AI every week. But only about 1 in 10 use AI while shopping.

That gap is the story. Your customers are learning to trust AI in daily life first. Shopping comes later. The teams that get ready now will be there when it does.

The numbers come from Numerator, a research firm that tracks what US shoppers buy. It launched its AI Consumer Index on October 14, 2026. The findings are based on a survey fielded in July 2026, covering more than 170,000 consumers. It is a vendor product launch, not an independent academic study. Still, it gives one of the clearest early views of how AI is entering everyday shopping.

## Who counts as "AI-engaged"?

The phrase sounds like one neat group. It is not.

In this index, "AI-engaged" covers three overlapping groups: people who use AI regularly, people who feel positive about AI, and people who use AI while shopping.

That matters. A person can use AI every week to write emails and still never use it to pick a face cream. Growth teams should not treat these three groups as one audience.

## The gap between using AI and shopping with AI

More than 30% of US households use AI weekly. But only nearly 1 in 10 say they use AI while shopping.

Among regular AI users, shopping with AI is about twice as common. That is the early audience. They already trust AI enough to use it often. Shopping is the next step for them, not the first one.

Most shoppers are not asking an AI tool to pick their next purchase yet. But a large group is one small step away.

## Where AI shopping is most likely to show up first

Not every category will change at the same speed. Numerator points to Health & Beauty, Apparel, and Electronics as the categories with the greatest potential for AI-enabled shopping disruption. In plain terms: these are the shelves where AI help is most likely to catch on first.

AI-engaged households also spend above average in Electronics, Apparel, Footwear & Accessories, and Health & Beauty. That is a benchmark difference. It means these households spend more than the average shopper. It does not prove that AI makes them spend more.

There is also a channel pattern worth noting. E-commerce and value retailers over-index among AI-engaged shoppers, while traditional grocers under-index.

The index also puts a size on the opportunity. AI-engaged households account for $37 billion in additional annual spending, as Numerator states it. Read that as potential, not proven disruption. It shows where AI-enabled shopping could gain traction. It does not show that AI shopping has already changed the market.

## Trust is still the gate

So why has shopping not followed daily AI use? The same survey points to trust.

About 48% of consumers are concerned about how their personal data is collected and used. About 41% cite payment security. One in five consumers now rank AI among the issues they are most concerned about. That is up from 12% in July 2025, and now on par with economic uncertainty.

Feelings matter a lot here. More than three-quarters (76%) of consumers who view AI positively use it daily or weekly. Among those with neutral or negative views, only 17% do. Confidence drives use. Use builds comfort. Comfort is what shopping needs.

## What B2C growth teams should do this week

1. Find your AI-comfortable customers. Look for people who already use AI tools or click AI suggestions in your app or site. They are your early audience.

2. Start with help, not selling. Offer AI help where the risk is low: finding the right shade, comparing two similar products, or restocking a past order. Low-risk help builds the trust shopping needs.

3. Make trust visible. Say in plain words what data you use, what you do not store, and how payment stays safe. Trust is not just a legal page. It is part of the product.

4. Watch the right categories. If you sell in Health & Beauty, Apparel, Footwear & Accessories, or Electronics, AI shopping is likely to reach you first. Test AI features there before you roll them out everywhere.

5. Measure the steps, not just the sale. Track how many shoppers try an AI feature, how many come back to it, and how many then buy. The sale is the last step. The earlier steps tell you if trust is growing.

The headline is not that AI has taken over shopping. It has not. A large, high-spending group already uses AI every week and is close to bringing it to shopping. The brands that help them take that step — with clear, useful, trustworthy tools — will win the next wave of loyalty.

Sources: Numerator release, Oct 14, 2026 (GlobeNewswire).
`,
  },
  {
    // Copy this object for every new post.
    slug: "personalization-marketing-science",
    title: "Personalization in Marketing Science: How AI Is Rewriting the Rules of Engagement",
    excerpt: "From RFM scores to reinforcement learning, and what comes after the cookie crumbles.",
    date: "2026-05-01",
    category: "Marketing Science",
    readTime: "8 min read",
    content: `
## Your opening section

Paste your blog content here.

Use a blank line between paragraphs.

## Add another section

- Use hyphens for bullet points
- Keep each bullet on its own line

> Use a greater-than sign for highlighted quotes.
`,
  },
];

// Add future posts above the existing post.
