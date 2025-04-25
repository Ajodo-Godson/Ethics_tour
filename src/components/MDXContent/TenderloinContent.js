import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef } from '../Footnote';

const TenderloinContent = () => {
    return (
        <div className="location-content">
            <h2>Tenderloin: Are we morally obligated to give to strangers in need, if it might enable harm?</h2>

            <p>Tenderloin traditionally hosts many unhoused individuals, mentally ill patients, and drug addicts. When they ask for help, many worry they'll buy alcohol, drugs, or other harmful items. Others disagree: they aren't responsible for actions after the money changes hands. So, do we have the duty to give, if we think it might enable harm?</p>

            {/* YouTube Video Embed */}
            <div className="video-container">

                <div className="responsive-video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/BuRPdmVzMAM?start=68"
                        title="Tenderloin District Context"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
                <p className="video-caption">Context on giving money to homeless people</p>
            </div>

            <h3>Truth About Giving Money to Homeless People</h3>

            <h4>Kantianism - Imperfect duty to give</h4>
            <p>In Kantian ethics, we're asked to act only on principles that we, simultaneously, could will to become a universal law. Would you rationally choose a world where no one ever gives? Test yourself:</p>

            <ul>
                <li>Is it logically possible?</li>
                <li>Does it conflict with what a rational person would want?</li>
            </ul>

            <p>These are the bases for Kant's conception of perfect duty (moral law you must always follow, such as "never lie") and imperfect duty (moral law with flexibility in how and how often you follow). While such a world is conceivable, rational beings who might someday need help cannot consistently follow such a principle. Thus, Kant would classify giving as an imperfect duty.</p>

            <p>Kant also requires treating people as ends in themselves, never merely as means. It means you cannot solely use anyone as tools, there must be aspects of humanity and dignity. Even if you don't give, you mustn't ignore them, because it would deny their moral worth, violating Kant's imperative to recognize each person as an autonomous rational being deserving of respect. <FootnoteRef id="3">
                Stohr, K. (2011). Kantian Beneficence and the Problem of Obligatory Aid. Journal of Moral Philosophy, 8(1), 45–67. https://doi.org/10.1163/174552411x549372
            </FootnoteRef> Consequently, Kantian ethics requires giving regularly within our means, while treating aid-seekers with respect by making eye contact or engaging in conversations.</p>

            <p>Some uses Kant's description of begging as "closely akin to robbery", and that the act of having to ask others for your essential needs is self-humiliating, to justify their refusing begging requests. <FootnoteRef id="4">
                Allais, L. (2015). What Properly Belongs to Me. Journal of Moral Philosophy, 12(6), 754–771. https://doi.org/10.1163/17455243-4681042.
            </FootnoteRef> But it doesn't. Refusing to give does not restore the beggar's dignity; it compounds their marginalization by reinforcing an unjust system where survival depends on private charity. Our discomfort in these moments is not personal; it is a sign our system is not doing enough.</p>

            <p>Your imperfect duty to give persists even when you're uncertain about the panhandler's genuine need or potential misuse. Again, the morality of an action lies not in its effects or your inclinations (e.g., emotions, self-interests), but whether it stems from a universalizable guiding principle. Refusing to give due to potential fraud or misuse is a prudential judgment based on prediction about others' behavior. This reasoning lacks universality and thus moral value; it may change how you give, but it doesn't excuse you from not following the moral law of giving.</p>

            <h4>EA - One-on-one giving is ineffective</h4>

            <p>Contrary to Kant's focus on rules, utilitarianism determines moral rightness by outcomes. Effective altruism (EA), a contemporary utilitarian approach, follows Peter Singer's principle:</p>

            <blockquote>"If it is in our power to prevent something bad from happening, without thereby sacrificing anything of comparable moral importance, we ought, morally, to do it"</blockquote>

            <p>and frames charitable giving as a moral obligation. However, EA prioritizes the most cost-effective interventions that yield the greatest good with empirical evidence, rather than one-on-one giving.</p>

            <p>When one-on-one giving enables harm, it becomes both ineffective and morally wrong. Since top three spending categories of panhandlers in North America includes drugs and alcohol <FootnoteRef id="5">
                Bose, R., & Hwang, S. W. (2002). Income and spending patterns among panhandlers. CMAJ: Canadian Medical Association Journal, 167(5), 477. https://pmc.ncbi.nlm.nih.gov/articles/PMC121964/
            </FootnoteRef>, giving will likely fund drug addiction or criminal activity and decrease overall well-being (e.g., health, happiness, and other factors) of the beggars and the community.</p>

            <h4>Buddhist ethics - Unconditional giving to benefit you and others in the interconnected world</h4>

            <p>While previous theories have an individualist assumption that people are independent and self-reliant, Buddhism rejects such a notion and lists it as a suffering (dukkha). It teaches that all things, including us, are impermanent and interdependent; what harms one, in some way, touches all. To live the Buddhist way of life, we should loosen our attachment to possessions and identity (since we're impermanent), and cultivate compassion and other virtues for us and others (since we're interdependent).</p>

            <p>Generosity (dāna) is the first of six virtues (pāramitās), essential for cultivating compassion (karuṇā). <FootnoteRef id="6">
                Dānavagga (The Chapter on Giving). (n.d.). In B. Sujato (Trans.), Aṅguttaranikāya (Numbered Discourses with the Buddha). SuttaCentral. Retrieved April 21, 2025, from https://suttacentral.net/an8-danavagga
            </FootnoteRef> For such practice, giving means offering something (material goods, time, energy, or wisdom), without expecting return or controlling its use. Therefore, we must give, while being mindful of your well-being, to cultivate our virtues and alleviate others' suffering.</p>

            <p>From this perspective, giving to someone who might use your aid harmfully doesn't make the act immoral. The intention (cetana) matters the most. If stemming from sincere compassion and care, the act remains virtuous regardless of outcome. However, similar to Kantian prudence, Buddhism also emphasizes wisdom (prajñā). When giving risks enabling serious harm—such as worsening addiction—wiser giving might involve offering food, water, gift cards, or directing someone to supportive services.</p>

            {/* Gallery component */}
            <MDXGallery
                images={[
                    '/assets/tenderloin/Image1.webp',
                    '/assets/tenderloin/Image2.webp',
                    '/assets/tenderloin/Image3.jpg',
                    '/assets/tenderloin/Image4.jpeg',
                    '/assets/tenderloin/Image5.jpeg',
                    '/assets/tenderloin/Image6.jpeg',
                    '/assets/tenderloin/Image7.jpeg',
                    '/assets/tenderloin/Image8.jpg',
                ]}
                location="Tenderloin"
            />

            {/* Citations section */}
            <h3 className="mdx-h3">Key Sources</h3>
            <div className="citation">
                <p>
                    Beauchamp, T. (2008). The Principle of Beneficence in Applied Ethics. <em>Stanford Encyclopedia of Philosophy</em>.
                    <a href="https://plato.stanford.edu/entries/principle-beneficence/" target="_blank" rel="noopener noreferrer"> Link</a>
                </p>
            </div>
        </div>
    );
};

export default TenderloinContent; 