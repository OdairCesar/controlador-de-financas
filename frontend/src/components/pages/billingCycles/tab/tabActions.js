export function selectTab(tabId){
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
export function showTabs(...tabIds){
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    /** 
     * PARA ENTENDER CRIEI ESSE EXEMPLO:
     * showTabs('tabList', 'tabCreate')
     * ->tabIds.forEach('tabList' => tabsToShow['tabList'] = true)
     * ->tabIds.forEach('tabCreate' => tabsToShow['tabCreate'] = true)
     * 
     * Resultado:
     * ->tabsToShow = { 'tabList' : true; 'tabCreate' : true;}
    */

    return{
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}