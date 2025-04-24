import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef, Footnote, FootnotesSection } from './Footnote';

const TenderloinContent = () => {
    return (
        <>
            <h1 className="mdx-h1">Tenderloin</h1>
            <h2 className="mdx-h2">Ethical dilemmas when giving might enable harm</h2>

            <img src={`${process.env.PUBLIC_URL}/assets/tenderloin/Image3.jpg`} alt="Tenderloin area" />

            <h3 className="mdx-h3">Are we morally obligated to give if our aid might enable harmful behaviors?</h3>

            <div className={`framework kant`}>
                <h4>Kantian Perspective</h4>
                <div>
                    <p className="mdx-p">
                        Kant would assert that you still have the imperfect duty to give. As Stohr (2011) explains,
                        the moral rightness of an action depends on whether it could be universalized to be a moral law,
                        independently of its predicted effects.<FootnoteRef id="1" /> Concerns that "aid might enable harm" are subjective and
                        lack the universality needed for a moral duty.
                    </p>
                </div>
            </div>

            <div className={`framework util`}>
                <h4>Utilitarian Approach</h4>
                <div>
                    <p className="mdx-p">
                        A utilitarian approach considers whether the aid likely improves or worsens overall well-being.
                        If giving is likely to result in harmful outcomes such as fostering addiction, it could decrease
                        overall well-being and might be considered morally wrong, as described in Beauchamp's (2008)
                        analysis of beneficence.<FootnoteRef id="2" />
                    </p>
                </div>
            </div>

            <div className={`framework buddha`}>
                <h4>Buddhist View</h4>
                <div>
                    <p className="mdx-p">
                        Buddhist texts on giving (dāna) from the Aṅguttaranikāya suggest that giving generates good merit
                        even if the recipient misuses the aid.<FootnoteRef id="3" /> However, Buddhist ethics also value wisdom. If giving directly
                        enables harm, a more discerning act of compassion might be needed.
                    </p>
                </div>
            </div>

            {/* Gallery component */}
            <MDXGallery
                images={[
                    '/assets/tenderloin/Image1.webp',
                    '/assets/tenderloin/Image2.webp',
                    '/assets/tenderloin/Image4.jpeg'
                ]}
                location="Tenderloin"
            />

            {/* Citations section */}
            <h3 className="mdx-h3">Key Sources</h3>
            <div className="citation">
                <p>
                    Stohr, K. (2011). Kantian Beneficence and the Problem of Obligatory Aid. <em>Journal of Moral Philosophy, 8</em>(1), 45–67.
                </p>
            </div>
            <div className="citation">
                <p>
                    Beauchamp, T. (2008). The Principle of Beneficence in Applied Ethics. <em>Stanford Encyclopedia of Philosophy</em>.
                    <a href="https://plato.stanford.edu/entries/principle-beneficence/" target="_blank" rel="noopener noreferrer"> Link</a>
                </p>
            </div>

            {/* Footnotes section */}
            <FootnotesSection>
                <Footnote id="1">
                    Stohr, K. (2011). "Kantian Beneficence and the Problem of Obligatory Aid." <em>Journal of Moral Philosophy, 8</em>(1), p. 52. Stohr explains that in Kant's framework, moral worth comes from acting from duty, not from concerns about consequences.
                </Footnote>
                <Footnote id="2">
                    Beauchamp, T. (2008). "The Principle of Beneficence in Applied Ethics." In <em>Stanford Encyclopedia of Philosophy</em>. Beauchamp articulates how utilitarian perspectives on giving weigh the potential benefit against potential harm.
                </Footnote>
                <Footnote id="3">
                    This concept is elaborated in "Dānavagga" (The Chapter on Giving) from the <em>Aṅguttaranikāya</em>, which suggests that the act of giving with good intention creates positive merit regardless of how the recipient uses the gift.
                </Footnote>
            </FootnotesSection>
        </>
    );
};

export default TenderloinContent; 