
import Marquee from 'react-fast-marquee';

const Quotes = () => {
    return (
        <div className="bg-green-600 py-5">
            <Marquee
                gradient={false}
                speed={50}
                pauseOnHover={true}
                className="text-white text-xl font-semibold"
            >
                <p className="mx-8">&quot;One cannot think well, love well, sleep well, if one has not dined well.&quot; - Virginia Woolf</p>
                <p className="mx-8">&quot;Food is not just eating energy. It&apos;s an experience.&quot; - Guy Fieri</p>
                <p className="mx-8">&quot;People who love to eat are always the best people.&quot; - Julia Child</p>
                <p className="mx-8">&quot;Life is uncertain. Eat dessert first.&quot; - Ernestine Ulmer</p>
            </Marquee>
        </div>
    );
};

export default Quotes;