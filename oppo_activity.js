/*
[Script]
http-response ^https:\/\/hd\.opposhop\.cn\/api\/cn\/oapi\/marketing\/cumulativeSignIn\/getSignInDetail\?activityId= script-path=oppo_activity.js, requires-body=false
*/

// oppo_activity.js
const url = $request.url;
const match = url.match(/activityId=(\d+)/);
if (match) {
  $persistentStore.write(match[1], "oppo_activityId");
  $notification.post("OPPO 商城", "", "activityId 已自动更新");
}
$done({});