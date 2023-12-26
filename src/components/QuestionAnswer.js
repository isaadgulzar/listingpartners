import FAQ from "./FAQ.js"

const QuestionAnswer = () => {
	const faqs = [
		{
			question:
				"How does Listing Partners select real estate agents for sellers?",
			answer:
				"Listing Partners employs a unique approach to choosing the right agent by tailoring the selection based on the seller's requirements, such as commission rates, marketing terms, funding options, and providing comprehensive support throughout the process. LP conducts an auction among the top five handpicked agents in the area, all with proven track records, who compete to fulfill the seller's set terms and conditions.",
		},
		{
			question:
				"What sets Listing Partners apart from other similar companies?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question: "Is there a cost for using Listing Partners' services?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question: "What information do I need to provide on the form?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question:
				"Can I choose from multiple recommended agents, or will one be assigned to me?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question: "What if I'm dissatisfied with the recommended agent?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question: "How long does the matching process typically take?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question:
				"Does Listing Partners operate nationwide or in specific regions?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question: "What criteria do you use to match sellers with agents?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question:
				"Are the recommended agents experienced in selling properties similar to mine?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
		{
			question:
				"Can I use Listing Partners if I've already been in touch with a real estate agent?",
			answer:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec orci pellentesque enim lobortis pulvinar. Nam dictum elit quis dapibus blandit. Mauris sed elit nec justo molestie rutrum at a libero.",
		},
	]

	return (
		<div className="w-full flex flex-col gap-4 lg:gap-10">
			<h1 className="section-heading">FAQs</h1>
			{faqs.map((faq, index) => (
				<FAQ key={index} question={faq.question} answer={faq.answer} />
			))}
		</div>
	)
}

export default QuestionAnswer
