module.exports = {
    blocks: {
        bilibili: {
            process: function(block) {
                var videoId = block.body.trim();
                var url = "http://www.bilibili.com/video/av" + videoId + "/?br";

                if (this.generator != "website") {
                    return '<p><a href="'+url+'">Video link</a></p>';
                }

                return '<div style="position: relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;">'
                +'<embed height="480" width="640" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://static.hdslb.com/miniloader.swf" flashvars="aid='+videoId+'&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>'
                +'</div>';
            }
        }
    }
};
