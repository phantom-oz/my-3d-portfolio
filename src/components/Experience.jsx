import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

import { experiences } from '../constants/constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff'
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						className='w-[60%] h-[60%] object-contain'
						src={experience.icon}
						alt={experience.company_name}
					/>
				</div>
			}>
			<div>
				<h3 className='text-white text-[24px]'>{experience.title}</h3>
				<p className='text-secondary text-[16px] font-semibold'>
					{experience.company_name}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{experience.points.map((point, idx) => (
					<li
						key={`experience-${experience.title}-point-${idx}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					What have I done so far
				</p>
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>
			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, idx) => (
						<ExperienceCard
							key={experience.title}
							index={idx}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'experience');