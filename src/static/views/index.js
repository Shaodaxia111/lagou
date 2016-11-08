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
         <IndexBanner {...this.props} />
         <p className="use-tit">更多方案解决你所需</p>
         <IndexTab {...this.props} style={{marginBottom:250}} />
         <ServerCompany {...this.props} />
         <Good />
      </div>
    )
  }
})
module.exports = Index ;