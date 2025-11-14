import "./EmotionItem.css";

function EmotionItem({id, img, name, onClick, isSelected}) {
    function handleClick(e) {
        onClick(id);
    }

    return (
        <div className={
            ["EmotionItem", isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(" ")
        }>
            <img src={img} alt={`emotion${id}`} onClick={handleClick} />
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem;