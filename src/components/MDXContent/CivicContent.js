import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef } from '../Footnote';

const CivicContent = () => {
    return (
        <div className="location-content">
            <h2>Civic Plaza: Public Spaces and Social Responsibility</h2>

            <p>When we walk through San Francisco's Civic Center and surrounding areas, we're confronted with a stark reality: individuals experiencing homelessness in the shadow of government buildings. This raises a profound question about our collective responsibility: Are we shifting the burden of addressing homelessness from public institutions to individual donors?</p>

            <p>Individual charity provides immediate relief, but can inadvertently normalize government inaction. Every dollar, sandwich, or kind word offered by passers-by momentarily eases suffering, yet potentially masks systemic failures in housing, healthcare, and social support.</p>

            <h3>Three Ethical Perspectives</h3>

            <h4>Kantian Perspective - Civic Duty and Systemic Action</h4>
            <p>Kant would argue that true moral action involves addressing root causes, not just symptoms. When we only give individually without advocating for systemic change, we fail to universalize our maxim properly. <FootnoteRef id="1">
                Korsgaard, C. M. (1996). Creating the Kingdom of Ends. Cambridge University Press.
            </FootnoteRef></p>

            <p>If we universalized a world where everyone gave individually but ignored systemic issues, it would be self-defeating—a world with perpetual need but no sustainable solutions. While individual giving fulfills an imperfect duty to help others, our perfect duty requires respecting humanity by addressing unjust structures that deny people their dignity and autonomy.</p>

            <h4>Utilitarian Approach - Maximizing Collective Welfare</h4>
            <p>Utilitarians would calculate which approach produces the greatest good for the greatest number. Effective altruists point to evidence that systemic interventions typically help more people more effectively than direct giving. <FootnoteRef id="2">
                Singer, P. (2015). The Most Good You Can Do: How Effective Altruism Is Changing Ideas About Living Ethically. Yale University Press.
            </FootnoteRef></p>

            <p>While giving $10 directly to someone might provide immediate relief, that same $10 contributed to effective organizations addressing homelessness could generate significantly more utility through leveraged impact, professional services, and economies of scale.</p>

            <h4>Buddhist View - Compassionate Action at Multiple Levels</h4>
            <p>Buddhism advocates for both immediate compassion and addressing root causes. The principle of dependent origination (paṭiccasamuppāda) shows how homelessness arises from complex interconnected conditions—mental health challenges, housing costs, economic policies, and more.</p>

            <p>A Buddhist approach would be multifaceted: offering immediate aid to alleviate suffering while also engaging in "right action" by working to transform systems that perpetuate suffering. <FootnoteRef id="3">
                Loy, D. (2003). The Great Awakening: A Buddhist Social Theory. Wisdom Publications.
            </FootnoteRef></p>

            <h3>Finding Balance</h3>

            <p>The ethical response isn't choosing between individual charity and systemic change—it's embracing both while recognizing their distinct purposes. When we give directly, we acknowledge the immediate humanity of the person before us. When we advocate for better systems, we honor our collective responsibility.</p>

            <p>As you walk through San Francisco's civic spaces, consider both the person asking for help today and the policies that might prevent others from needing to ask tomorrow.</p>

            {/* Gallery component */}
            <MDXGallery
                images={[
                    '/assets/civic_plaza/Image1.jpg',
                    '/assets/civic_plaza/Image2.jpeg',
                    '/assets/civic_plaza/Image3.jpeg',
                    '/assets/civic_plaza/Image4.jpeg',
                    '/assets/civic_plaza/Image5.jpeg',
                    '/assets/civic_plaza/Image6.jpeg',
                    '/assets/civic_plaza/Image7.jpeg',
                    '/assets/civic_plaza/Image8.jpeg',
                ]}
                location="Civic Plaza"
            />
        </div>
    );
};

export default CivicContent; 