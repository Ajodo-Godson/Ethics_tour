import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef, Footnote, FootnotesSection } from './Footnote';

const TenderloinContent = () => {
    return (
        <div>
            <h1 className="mdx-h1">Tenderloin</h1>
            <h2 className="mdx-h2">Are we morally obligated to give to strangers in need, if it might enable harm?</h2>

            {/* Content paragraphs */}
            <p className="mdx-p">
                Since August 2024, San Francisco streets are largely clear of homeless encampments.
                However, Tenderloin traditionally hosts many unhoused individuals, mentally ill patients,
                and drug addicts. When they ask for help, many worry they'll buy alcohol, drugs, or other items,
                and the givers will be funding their harmful behaviors. Others disagree: they aren't responsible
                for actions after the money changes hands. So, do we have the duty to give, if we think it
                might enable harm or misuse?
            </p>

            <h3 className="mdx-h3">Truth About Giving Money to Homeless People</h3>

            <h3 className="ethical-perspectives">Ethical Perspectives</h3>

            {/* Framework sections rendered properly */}
            <div className="framework-card kant">
                <div className="framework-header">
                    <div className="framework-icon kant-icon">K</div>
                    <h4>Kantian Perspective</h4>
                </div>
                <div className="framework-body">
                    <p>
                        In Kantian ethics, we're asked to act only on principles that we could, at the same time,
                        will become a universal law. When the action is refusing giving aid, would you rationally
                        choose a world in which no one ever gives? If you say yes, Kant would give you two tests:
                    </p>

                    <ul className="mdx-ul">
                        <li className="mdx-li">Is it logically possible?</li>
                        <li className="mdx-li">Does it conflict with what a rational person would want?</li>
                    </ul>

                    <p>
                        These are the bases for Kant's conception of perfect duty (moral law with no exception, such as "never lie")
                        and imperfect duty (moral law with flexibility in how and how often), respectively. While a world where
                        no one ever gives is conceivable, as rational beings who might someday need help ourselves, we cannot
                        consistently follow such a principle. Thus, Kant would classify giving as an imperfect duty.
                    </p>
                </div>
            </div>

            <div className="framework-card util">
                <div className="framework-header">
                    <div className="framework-icon util-icon">U</div>
                    <h4>Utilitarian Approach</h4>
                </div>
                <div className="framework-body">
                    <p>
                        A utilitarian approach considers whether the aid likely improves or worsens overall well-being.
                        If giving is likely to result in harmful outcomes such as fostering addiction, it could decrease
                        overall well-being and might be considered morally wrong, as described in Beauchamp's (2008)
                        analysis of beneficence.<FootnoteRef id="2" />
                    </p>
                </div>
            </div>

            <div className="framework-card buddha">
                <div className="framework-header">
                    <div className="framework-icon buddha-icon">B</div>
                    <h4>Buddhist View</h4>
                </div>
                <div className="framework-body">
                    <p>
                        Buddhist texts on giving (dāna) from the Aṅguttaranikāya suggest that giving generates good merit
                        even if the recipient misuses the aid.<FootnoteRef id="3" /> However, Buddhist ethics also value wisdom. If giving directly
                        enables harm, a more discerning act of compassion might be needed.
                    </p>
                </div>
            </div>

            {/* Rest of your component... */}
        </div>
    );
};

export default TenderloinContent; 