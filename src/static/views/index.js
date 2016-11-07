import React from 'react';
import IndexBanner from '../component/indexBanner';
import IndexTab from '../component/indexTab';
import ServerCompany from '../component/serverCompany';
import Good from '../component/good';
var Index  = React.createClass({
  // onhandle:function(){
  //   // browserHistory.push('/page2');
  //   this.props.history.push('/page2');
  //   // this.context.router.push('/page2')
  // },
  render:function() {
    return (
      <div className="index-content">
         <IndexBanner />
         <p className="use-tit">更多方案解决你所需</p>
         <IndexTab style={{marginBottom:250}} />
         <ServerCompany />
         <Good />
      </div>
    )
  }
})
module.exports = Index ;