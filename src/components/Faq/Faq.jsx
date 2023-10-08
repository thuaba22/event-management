const Faq = () => {
  return (
    <div className="container  max-w-6xl mx-auto mb-20">
      <div>
        <h2 className="text-3xl font-bold text-center mb-14">
          Frequently Asked Questions
          <hr className="border-black border-2 w-1/6 mx-auto mt-1" />
        </h2>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-bold">
            1. How do I book an event with your service?
          </div>
          <div className="collapse-content">
            <p>
              To book an event with our service, you can visit our website and
              fill out the booking form on the &#39;Book Now&#39; page. Provide
              all the necessary details, and our team will get in touch with you
              to discuss the event further.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-bold">
            2. What types of events do you specialize in?
          </div>
          <div className="collapse-content">
            <p>
              We specialize in a wide range of events, including weddings,
              birthday parties, anniversaries, engagement parties, retirement
              parties, and baby showers. Our experienced team can help you plan
              and organize any type of event you have in mind.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-bold">
            3. Can I customize the event packages to fit my specific needs?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer customizable event packages to ensure that your
              event meets your unique requirements. You can discuss your
              preferences and specific needs with our team, and we will work
              together to create a personalized package just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
