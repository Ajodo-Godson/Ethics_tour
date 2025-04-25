import React from 'react';
import '../styles/References.css';

const References = ({ isModal = false }) => {
    // The isModal prop helps us adapt styles when used in modal

    return (
        <div className={isModal ? "references-content" : "references-container"}>
            {!isModal}
            <div className="references-list">
                <div className="reference-item">
                    <p>A Gift With Six Factors. (n.d.). In B. Sujato (Trans.), Aṅguttaranikāya (Numbered Discourses with the Buddha). SuttaCentral. Retrieved April 21, 2025, from <a href="https://suttacentral.net/an6.37/en/sujato" target="_blank" rel="noopener noreferrer">https://suttacentral.net/an6.37/en/sujato</a></p>
                </div>

                <div className="reference-item">
                    <p>Allais, L. (2015). What Properly Belongs to Me. <em>Journal of Moral Philosophy, 12</em>(6), 754–771. <a href="https://doi.org/10.1163/17455243-4681042" target="_blank" rel="noopener noreferrer">https://doi.org/10.1163/17455243-4681042</a></p>
                </div>

                <div className="reference-item">
                    <p>Beauchamp, T. (2008, January 2). The Principle of Beneficence in Applied Ethics. <em>Stanford Encyclopedia of Philosophy</em>. <a href="https://plato.stanford.edu/entries/principle-beneficence/" target="_blank" rel="noopener noreferrer">https://plato.stanford.edu/entries/principle-beneficence/</a></p>
                </div>

                <div className="reference-item">
                    <p>Bose, R., & Hwang, S. W. (2002). Income and spending patterns among panhandlers. <em>CMAJ: Canadian Medical Association Journal, 167</em>(5), 477. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC121964/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC121964/</a></p>
                </div>

                <div className="reference-item">
                    <p>Dānavagga (The Chapter on Giving). (n.d.). In B. Sujato (Trans.), Aṅguttaranikāya (Numbered Discourses with the Buddha). SuttaCentral. Retrieved April 21, 2025, from <a href="https://suttacentral.net/an8-danavagga" target="_blank" rel="noopener noreferrer">https://suttacentral.net/an8-danavagga</a></p>
                </div>

                <div className="reference-item">
                    <p>Gorin, D. (2021). Panhandling Laws - Penal Code 647(c) PC. Egattorneys.com. <a href="https://www.egattorneys.com/panhandling-penal-code-647c" target="_blank" rel="noopener noreferrer">https://www.egattorneys.com/panhandling-penal-code-647c</a></p>
                </div>

                <div className="reference-item">
                    <p>Haushofer, J., & Shapiro, J. (2016). The Short-term Impact of Unconditional Cash Transfers to the Poor: Experimental Evidence from Kenya. <em>The Quarterly Journal of Economics, 131</em>(4), 1973–2042. <a href="https://doi.org/10.1093/qje/qjw025" target="_blank" rel="noopener noreferrer">https://doi.org/10.1093/qje/qjw025</a></p>
                </div>

                <div className="reference-item">
                    <p>Reinhard, D. (2021). How Much Do They Make? A Systematic Review of Income Generated From Begging. <em>International Criminal Justice Review, 33</em>(1), 105756772110364. <a href="https://doi.org/10.1177/10575677211036498" target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/10575677211036498</a></p>
                </div>

                <div className="reference-item">
                    <p>Saunders-Hastings, E. (2019). Benevolent Giving and the Problem of Paternalism. In H. Greaves & T. Pummer (Eds.), <em>Effective Altruism: Philosophical Issues</em> (pp. 115–136). Oxford University Press. <a href="https://doi.org/10.1093/oso/9780198841364.003.0008" target="_blank" rel="noopener noreferrer">https://doi.org/10.1093/oso/9780198841364.003.0008</a></p>
                </div>

                <div className="reference-item">
                    <p>Stohr, K. (2011). Kantian Beneficence and the Problem of Obligatory Aid. <em>Journal of Moral Philosophy, 8</em>(1), 45–67. <a href="https://doi.org/10.1163/174552411x549372" target="_blank" rel="noopener noreferrer">https://doi.org/10.1163/174552411x549372</a></p>
                </div>

                <div className="reference-item">
                    <p>Thomas E. Hill. (1980). Humanity as an End in Itself. <em>Ethics, 91</em>(1), 84. <a href="https://www.academia.edu/48872425/Humanity_as_an_End_in_Itself" target="_blank" rel="noopener noreferrer">https://www.academia.edu/48872425/Humanity_as_an_End_in_Itself</a></p>
                </div>
            </div>
        </div>
    );
};

export default References; 