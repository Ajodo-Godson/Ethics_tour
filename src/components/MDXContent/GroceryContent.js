import React from 'react';
import MDXGallery from '../MDXGallery';

const GroceryContent = () => {
    return (
        <>
            <h1 className="mdx-h1">Grocery Stores</h1>
            <h2 className="mdx-h2">In-kind aid vs. monetary assistance</h2>

            <img src={`${process.env.PUBLIC_URL}/assets/target/Image1.jpg`} alt="Grocery store area" />

            <h3 className="mdx-h3">Should we only give in-kind aid, such as food, water or health kits, which cannot be misused?</h3>

            <div className={`framework kant`}>
                <h4>Kantian Perspective</h4>
                <div>
                    <p className="mdx-p">
                        From a Kantian lens, when you give only in-kind aid, are you treating the recipient as a fellow
                        rational being, or are you subtly asserting superiority in deciding what they should want?
                        Kant would caution against paternalism while still acknowledging your imperfect duty to help.
                    </p>
                </div>
            </div>

            <div className={`framework util`}>
                <h4>Utilitarian Approach</h4>
                <div>
                    <p className="mdx-p">
                        Effective altruists would approach this pragmatically: Which form of giving produces the most
                        positive impact? Studies suggest direct cash aid often improves outcomes, but context matters.
                        Giving a sandwich to someone who is clearly hungry may yield immediate utility.
                    </p>
                </div>
            </div>

            <div className={`framework buddha`}>
                <h4>Buddhist View</h4>
                <div>
                    <p className="mdx-p">
                        Buddhist ethics would focus on whether your action reduces suffering while maintaining compassion,
                        acknowledging that intention shapes the moral quality of giving.
                    </p>
                </div>
            </div>

            {/* Gallery component */}
            <MDXGallery
                images={[
                    '/assets/target/Image1.jpg',
                    '/assets/civic_plaza/Image6.jpeg',
                    '/assets/civic_plaza/Image7.jpeg'
                ]}
                location="Grocery Stores"
            />
        </>
    );
};

export default GroceryContent; 