import React from 'react';

const References = () => {
    return (
        <div className="references-section">
            <button className="references-toggle" onClick={() => document.querySelector('.references-content').classList.toggle('expanded')}>
                References & Sources
            </button>

            <div className="references-content">
                <ul>
                    <li>Beauchamp, T. (2008). The Principle of Beneficence in Applied Ethics. <em>Stanford Encyclopedia of Philosophy</em>. <a href="https://plato.stanford.edu/entries/principle-beneficence/" target="_blank" rel="noopener noreferrer">Link</a></li>
                    <li>Haushofer, J., & Shapiro, J. (2016). The Short-term Impact of Unconditional Cash Transfers to the Poor: Experimental Evidence from Kenya. <em>The Quarterly Journal of Economics, 131</em>(4), 1973–2042.</li>
                    <li>Macaskill, W. (2019). <em>Doing Good Better: How Effective Altruism Can Help You Help Others, Do Work That Matters, and Make Smarter Choices About Giving Back</em>. Avery.</li>
                    <li>Saunders-Hastings, E. (2019). Benevolent Giving and the Problem of Paternalism. In H. Greaves & T. Pummer (Eds.), <em>Effective Altruism: Philosophical Issues</em> (pp. 115–136). Oxford University Press.</li>
                    <li>Stohr, K. (2011). Kantian Beneficence and the Problem of Obligatory Aid. <em>Journal of Moral Philosophy, 8</em>(1), 45–67.</li>
                    <li>Thomas E. Hill. (1980). Humanity as an End in Itself. <em>Ethics, 91</em>(1), 84.</li>
                    <li>Suttacentral: "A Gift With Six Factors" & "Dānavagga (The Chapter on Giving)" from <em>Aṅguttaranikāya</em> (Numbered Discourses with the Buddha). <a href="https://suttacentral.net/an6.37/en/sujato" target="_blank" rel="noopener noreferrer">Link</a></li>
                </ul>
            </div>
        </div>
    );
};

export default References; 