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
         <IndexTab />
         <ServerCompany />
         <Good />
      </div>
    )
  }
})
module.exports = Index ;