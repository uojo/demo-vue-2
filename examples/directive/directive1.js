let handle={
my1:{
  bind:(el,{name,value,oldValue,expression,arg,modifiers},vnode,oldVnode)=>{
    //做绑定的准备工作
    //比如添加事件监听器，或是其他只需要执行一次的复杂操作
    console.debug("bind", el );
    el.value = "1"
    
    document.addEventListener('click', (e)=>{
      console.debug("directive.bind.click",e);
    });
      
  },
  inserted:(el,binding)=>{
    console.debug("inserted",el,binding);

    el.focus();
  },
  update:()=>{
    //根据获得的新值执行对应的更新
    //对于初始值也会调用一次
    console.debug("update");
  },
  componentUpdated:()=>{
    console.debug("componentUpdated");
  },
  unbind:()=>{
    //做清理操作
    //比如移除bind时绑定的事件监听器
    console.debug("unbind");
  },
},
my2:{
  bind:(el,binding,vnode,oldVnode)=>{
    console.debug("bind", arguments);
    // el.focus();
  },
  inserted:()=>{
    console.debug("inserted");
  },
  update:()=>{
    console.debug("update");
  },
  componentUpdated:()=>{
    console.debug("componentUpdated");
  },
  unbind:()=>{
    console.debug("unbind");
  },
}
}
export default handle;