import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef, Footnote, FootnotesSection } from './Footnote';

const CivicContent = () => {
    return (
        <>
            <h1 className="mdx-h1">Civic Plaza</h1>
            <h2 className="mdx-h2">Public giving & institutional responsibility</h2>

            <img src={`${process.env.PUBLIC_URL}/assets/civic_plaza/Image1.jpg`} alt="Civic plaza" />

            <h3 className="mdx-h3">Are we shifting the burden of addressing homelessness and poverty from public institutions onto individual donors, thereby normalizing systemic failure?</h3>

            <div className={`framework kant`}>
                <h4>Kantian Perspective</h4>
                <div>
                    <p className="mdx-p">
                        Kant might question whether we're giving from genuine duty or merely to appear virtuous in this
                        public setting.<FootnoteRef id="1" /> The moral worth of an action comes from acting from duty, not from inclination
                        or social pressure.
                    </p>
                </div>
            </div>

            <div className={`framework util`}>
                <h4>Utilitarian Approach</h4>
                <div>
                    <p className="mdx-p">
                        Utilitarians would consider the broader implications. Does public giving create positive awareness
                        or potentially negative consequences like disputes over resources?<FootnoteRef id="2" />
                    </p>
                </div>
            </div>

            <div className={`framework buddha`}>
                <h4>Buddhist View</h4>
                <div>
                    <p className="mdx-p">
                        Buddhist ethics reminds us that our intentions matter - giving publicly with genuine compassion
                        differs from giving for social recognition.<FootnoteRef id="3" /> Yet all beings deserve support regardless of where
                        they're encountered.
                    </p>
                </div>
            </div>

            {/* Gallery component */}
            <MDXGallery
                images={[
                    '/assets/civic_plaza/Image1.jpg',
                    '/assets/civic_plaza/Image2.jpeg',
                    '/assets/civic_plaza/Image5.jpeg'
                ]}
                location="Civic Plaza"
            />

            {/* Footnotes section */}
            <FootnotesSection>
                <Footnote id="1">
                    This concern is rooted in Kant's distinction between acting from duty versus acting merely in accordance with duty, as explained in his <em>Groundwork of the Metaphysics of Morals</em>.
                </Footnote>
                <Footnote id="2">
                    Some utilitarian philosophers argue that private charity can sometimes undermine public responsibility. For instance, Saunders-Hastings (2019) discusses how private generosity might reduce pressure for structural reforms.
                </Footnote>
                <Footnote id="3">
                    The Buddhist concept of <em>cetanā</em> (intention) is central to determining the ethical quality of an action. As the Buddha stated in the Aṅguttaranikāya: "It is intention that I call karma."
                </Footnote>
            </FootnotesSection>
        </>
    );
};

export default CivicContent; 