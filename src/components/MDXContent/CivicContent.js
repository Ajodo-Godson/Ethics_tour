import React from 'react';
import MDXGallery from '../MDXGallery';
import { FootnoteRef } from '../Footnote';

const CivicContent = () => {
    return (
        <div className="location-content">
            <h2>Civic Center Plaza: Does private charity weaken collective responsibility of addressing relevant issues, such as homelessness and substance usage?</h2>

            <p>The plaza is a public, civic place known for community gatherings, celebrations, and democratic engagement. It's also where the gap between individual charity and systemic responsibility becomes more visible. Do our individual acts of giving inadvertently weaken our commitment to collective solutions, considering panhandling is caused primarily by poverty, lack of adequate affordable housing, <FootnoteRef id="7">
                People of color, those identify as LGBTQIA+, and those with disabilities are disproportionately affected to be unhoused. Aside homeless adults, approximately 4.2 million underage people in the United States experience homelessness annually. Family conflict, domestic violence, and abuse are major drivers.
            </FootnoteRef> lack of healthcare, prejudice against race, mental illnesses, disabilities, and LGBTQIA+, or a combination of systemic and personal factors?</p>

            <h3>Kant: Imperfect Duty to Give vs. Civic Duty</h3>
            <p>While Kant recognizes individuals' imperfect duty to give, he also emphasizes our duty to participate in establishing and maintaining just institutions (e.g., through voting and paying taxes). As hinted in the Tenderloin section, it is a systemic failure when begging is the only option for some, and the responsibilities mainly fail on social structures that render these inequalities. Private giving cannot and shouldn't replace nor undermine the systemic responsibility to uphold social justice. We should strive for a society where begging and individual giving become unnecessary.</p>

            <h3>Effective Altruism: Individual Solutions vs. Structural Change</h3>
            <p>EA holds a similar worry for different reasons. Not only is individual giving less effective than supporting proven interventions and organizations, but it can also divert attention and resources from structural solutions to address root causes. While you can give one-on-one, you must direct more efforts or resources toward effective interventions: affordable housing initiatives, mental health services, addiction treatment programs, and basic income guarantees. Otherwise, you risk decreasing the total utility by temporarily alleviating symptoms while leaving causes untreated or even enabling harm.</p>

            <h3>Buddhist Perspective: Compassion and Systemic Change</h3>
            <p>The Buddhist perspective encourages engaging compassionately at all levels, from individual giving to community support to structural reforms, since they are all interconnected. The dependent origination reminds us that homelessness arises from complex conditions that require multifaceted responses. This holistic understanding acknowledges both the immediate suffering that demands our compassion and the systemic issues that perpetuate cycles of poverty and homelessness.</p>

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