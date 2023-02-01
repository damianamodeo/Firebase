import Carousel from '@UICOMPONENTS/containers/Carousel';
import Content from '@UICOMPONENTS/containers/Content';
import Header from '@UICOMPONENTS/containers/Header';
import Modal from '@UICOMPONENTS/containers/Modal';
import Button from '@UICOMPONENTS/inputs/ButtonSimple';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const IconsSubPageOne = ({ currentSubpage, setCurrentSubpage }: any) => {
  const [[page, directionMain], setPage] = useState([0, 0]);
	  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

	const header = (
		<Header
			headerLeft={null}
			title={'Four'}
			headerRight={null}
		></Header>
	);



	const content = (
		<Content>
			<Button
				color="primary"
				action={() => paginate(1)
				}
			>
				Left
			</Button>
			<Button
				color="primary"
				action={() => paginate(-1)
				}
			>
				Right
			</Button>
			<div className="border-4 border-white  w-[90vh] h-[70vh] flex">
				<AnimatePresence
					initial={false}
					mode="popLayout"
					custom={directionMain}
				>
					<motion.div
						key={page}
						custom={directionMain}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 }
						}}
						className="bg-green-500 w-full"
					>
						{page}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit maiores quasi, ipsa animi quo cumque beatae dolore nemo obcaecati. Praesentium quae reprehenderit eveniet tempora illo veritatis aperiam doloremque. Consectetur, qui beatae consequatur sed excepturi cumque laboriosam sint explicabo culpa nihil obcaecati modi voluptas quae quam ullam magnam non velit maiores doloribus, asperiores reprehenderit quod ut accusantium. Voluptate expedita facere quasi velit, exercitationem rerum nihil voluptatibus suscipit minus laborum, ipsum commodi blanditiis. Consequuntur vitae eum iste ab, tempore maxime incidunt sequi. Facere sint sunt at obcaecati hic cupiditate quos iusto nostrum ducimus omnis officia facilis quae, molestias eveniet id, magnam laborum. Commodi culpa consequuntur asperiores minima perspiciatis dolorum at tenetur deserunt? Possimus eligendi provident laudantium tempore! Ut, dicta sunt. Nesciunt asperiores optio dolorum. Animi eveniet fugiat, odio hic fugit ducimus natus praesentium atque expedita labore dolor aut ipsam molestias commodi aliquam repellendus! Tenetur dicta tempore quasi quibusdam alias laborum! Iusto nulla officiis est, quidem temporibus consequuntur omnis reprehenderit asperiores. Ipsam optio est exercitationem quae voluptates placeat, harum esse doloribus molestias libero maxime, nostrum velit dolorum earum fugit sequi atque veritatis. Dolores eius, reiciendis commodi dignissimos ratione saepe blanditiis? Corrupti nisi ipsum ut porro odio. Odit corporis vitae eum nulla ipsam dicta commodi debitis in, nesciunt velit accusantium, libero itaque? Reprehenderit repellat deleniti consectetur cumque veniam illo quas. Nisi corrupti fuga laudantium illum sit sapiente quos quo molestias fugit officia. Reprehenderit accusamus earum repellat, perspiciatis recusandae, numquam omnis nobis hic suscipit tempore ea consectetur perferendis reiciendis assumenda similique. Soluta fugit quo consequatur, libero ab distinctio iste corrupti quae tenetur consequuntur dolore alias aperiam eius sapiente dolores, fuga odit quisquam impedit ratione dignissimos neque aspernatur voluptatem perferendis nisi. Excepturi aspernatur quod est expedita, id non modi nisi commodi ipsa odit placeat laboriosam inventore optio dolore illum quo quibusdam autem. Debitis laudantium consequuntur accusantium ab aliquam sed repudiandae dicta, voluptates repellendus necessitatibus. Aspernatur praesentium nihil voluptatibus quod. Nostrum, officia ullam dolore obcaecati illo reiciendis quibusdam voluptatem molestiae nesciunt in culpa aspernatur repudiandae, incidunt optio! Vel beatae architecto nisi enim officia. Quibusdam iure dolore, ad earum incidunt minus eos fuga molestias corporis facilis, officia accusamus perspiciatis ut rem vero. Provident non iure earum, hic fugiat sint repellendus suscipit natus adipisci, maxime facere, est velit! Magni quasi laboriosam earum tempora quibusdam nisi sit fugit, perferendis animi suscipit repellendus reiciendis at aliquid a nobis ea facere illo rem ratione veritatis quae impedit unde nostrum porro! At libero quod vel eligendi repellendus dolores. Repudiandae laborum ab ex molestiae voluptatem? Vel perferendis, molestias quia velit necessitatibus quis omnis, culpa excepturi, neque deleniti sequi! Eos, excepturi modi voluptatum, maiores praesentium quod amet deleniti minima, natus consectetur officia obcaecati reiciendis numquam debitis similique doloribus explicabo. Repellendus ex suscipit, atque commodi illum totam quaerat minus aperiam ad! Nam natus, eveniet minima nostrum maxime repellendus rerum doloremque debitis animi quidem ratione! Error, minus. Adipisci distinctio recusandae voluptate est accusamus numquam reiciendis perferendis, delectus sunt doloremque dolorum unde error quibusdam ipsam et voluptatem odio cum optio ea autem ut, commodi nam in! Ipsam.
					</motion.div>
				</AnimatePresence>
			</div>
		</Content>
	);

	return (
		<>
			{header}
			{content}
		</>
	);
};

export default IconsSubPageOne;
