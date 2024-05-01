const TaskTab = props => {
    const { updateTabId, tab, isActive} = props
    const onClickBtn = () => {
        updateTabId(tab.optionId)
    }
    const clsBtn = isActive ? 'active' : 'in-active'
    return(
        <li key={tab.optionId}>
            <button type="button" className={`tab-btn ${clsBtn}`} onClick={onClickBtn}>{tab.displayText}</button>
        </li>
    )
}

export default TaskTab