import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef, Footnote, FootnotesSection } from './Footnote';

const GroceryContent = () => {
    return (
        <div>
            <h1>Food Retailers</h1>
            <h2>Should we only give in-kind aid, such as food, water or gift cards, which cannot be misused?</h2>

            <img src="/assets/target/Image1.jpg" alt="Grocery store" />

            <p>When someone asks for help outside a grocery store, many people instinctively offer in-kind aid (e.g., groceries, snacks, bottled water, gift cards) instead of cash. One justification for this is to prevent misuse. The giver feels assured that their help is contained and will not enable harm. As in the case of the mother with a child, we are sure that giving milk or some food will be better than money.</p>

            <h3>Ethical Perspectives</h3>

            <div className="framework-card kant">
                <div className="framework-header">
                    <div className="framework-icon kant-icon">K</div>
                    <h4>Kantian Perspective - Respect for Autonomy</h4>
                </div>
                <div className="framework-body">
                    <p>From a Kantian lens, the intention and respect for the recipient's rational agency are central. When you give only in-kind aid, are you treating the recipient as a fellow rational being, i.e., an end in themselves, or are you subtly asserting your superiority in deciding what they should want?</p>

                    <p>While it may feel morally safer to give items that can't be misused, Kant would caution against paternalism. Kantian ethics doesn't require us to give money, but it does require that when we give, we do so with respect (Thomas E. Hill, 1980). Respect, in this case, means recognizing the recipient's capacity to decide what best meets their needs.</p>

                    <p>So if you give food instead of cash simply to avoid enabling misuse, but still treat the person with dignity (e.g., engaging in a conversation or asking what they actually need), you may still fulfill your imperfect duty to help while honoring their autonomy.</p>
                </div>
            </div>

            <div className="framework-card util">
                <div className="framework-header">
                    <div className="framework-icon util-icon">U</div>
                    <h4>Effective Altruism - Optimizing Impact</h4>
                </div>
                <div className="framework-body">
                    <p>Effective altruists would approach this more pragmatically: Which form of giving produces the most positive impact? Studies suggest direct cash aid often improves outcomes like housing stability and food security (Haushofer & Shapiro, 2016). But the context matters. Giving a sandwich to someone who is clearly hungry may yield immediate utility.</p>

                    <p>Giving $5 may not, especially if you suspect it might be spent in ways that undermine their well-being. But effective altruists would go further and ask, "Why give here at all?"</p>

                    <p>They would argue that it's better to donate money or some in-kind aid to a charity that provides addiction treatment, housing, or some sort of care for the needy. Instead of rejecting in-kind giving, they would ask if we're indeed optimizing the utility of our resources, and if our intentions are producing the best outcomes.</p>
                </div>
            </div>

            <div className="framework-card buddha">
                <div className="framework-header">
                    <div className="framework-icon buddha-icon">B</div>
                    <h4>Buddhist Perspective - Skillful Giving</h4>
                </div>
                <div className="framework-body">
                    <p>Buddhist ethics would focus on whether your action reduces suffering while maintaining compassion, acknowledging that intention shapes the moral quality of giving. The concept of skillful means (upāya) suggests that the form of giving might need to be adapted to the recipient's specific situation.</p>

                    <p>In Buddhism, both the intention behind giving and the actual reduction of suffering matter. If you believe that in-kind aid will better reduce suffering in this specific context, while still maintaining respect and compassion for the person, this could be considered skillful giving.</p>

                    <p>However, Buddhist practice also encourages examining our own motives: Are we withholding cash because of our attachment to control, or genuine compassion? The Middle Way suggests finding balance between complete detachment from outcomes and micromanaging how aid is used.</p>
                </div>
            </div>

            {/* Gallery component */}
            <MDXGallery
                images={[
                    '/assets/target/Image2.jpeg',
                    '/assets/target/Image1.jpg',
                    '/assets/target/Image3.jpeg',
                ]}
                location="Grocery Stores"
            />

            {/* Citations section */}
            <h3 className="mdx-h3">Key Sources</h3>
            <div className="citation">
                <p>
                    Hill, T. E. (1980). Humanity as an End in Itself. <em>Ethics, 91</em>(1), 84–99.
                </p>
            </div>
            <div className="citation">
                <p>
                    Haushofer, J., & Shapiro, J. (2016). The Short-term Impact of Unconditional Cash Transfers to the Poor: Experimental Evidence from Kenya. <em>The Quarterly Journal of Economics, 131</em>(4), 1973–2042.
                </p>
            </div>

            {/* Footnotes section */}
            <FootnotesSection>
                <Footnote id="1">
                    Hill argues that respect for humanity requires us to recognize each person's capacity to set and pursue their own ends, which has implications for how we approach charitable giving.
                </Footnote>
                <Footnote id="2">
                    This study found that direct cash transfers to poor households in Kenya led to increased food security, improvements in psychological well-being, and other positive outcomes.
                </Footnote>
            </FootnotesSection>
        </div>
    );
};

export default GroceryContent; 