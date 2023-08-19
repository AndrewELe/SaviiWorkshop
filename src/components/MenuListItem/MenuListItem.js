import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
	return (
		<div className={styles.MenuListItem}>
			{/* <div className={styles.description + ' ' + 'flex-ctr-ctr'}>
				{menuItem.description}
			</div> */}
			<div className={styles.name}>{menuItem.name}</div>
{/* style image in menulistitem.module */}
			<img src={menuItem.imageURL} width= "75" height = "75"/>

			<div className={styles.description}>
       			<button className='description' onClick={() => window.alert(menuItem.description)} >
         			CLICK FOR DESCRIPTION 
       			</button>
     		</div>

			<div className={styles.buy}>
				<span>${menuItem.price.toFixed(2)}</span>
				<button
					className="btn-sm"
					onClick={() => handleAddToOrder(menuItem._id)}
				>
					ADD
				</button>
			</div>
		</div>
	);
}

// import styles from './MenuListItem.module.scss';

// export default function MenuListItem({ menuItem, handleAddToOrder }) {
//   return (
//     <div className={styles.MenuListItem}>
//       {/* <div className={styles.imageURL + ' ' + 'flex-ctr-ctr'}>{menuItem.imageURL}</div> */}
//     <img src={menuItem.imageURL} width= "75" height = "75"/>
//     <div className={styles.name}>{menuItem.name}</div>
//     <div className={styles.description}>
//       <button className='description' onClick={() => window.alert(menuItem.description)} >
//         CLICK FOR DESCRIPTION 
//       </button>
//     </div>
//       <div className={styles.buy}>
//         <span>${menuItem.price.toFixed(2)}</span>
//         <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
//           ADD
//         </button>
//       </div>
//     </div>
//   );