import wepy from 'wepy'


export default function fetch(option){
  const BASEURL = 'http://8i5yfe.natappfree.cc/api/public/v1'
  return wepy.request({
    url:BASEURL + option.url,
    method:option.method || 'GET',
    data:option.data || {},
    header:option.header || {}
  })
}