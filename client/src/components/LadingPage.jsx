import { React } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import myvideo from '../viajes por el mundo-(480p).mp4'
import style from './LadingPage.module.css'

function LadingPage() {	
	return (
		<div className={style.main}>
			<div>
				<Link to='/home'>
					<button className={style.btn}>Ingresar</button>
				</Link>
			</div>
			<div>
				<ReactPlayer
					url={myvideo}
					className='react-player'
					playing
					muted='muted'
					controls
					width='100%'
					height='50%'
				/>
			</div>
		</div>
		)
}
export default LadingPage