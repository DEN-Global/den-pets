let csrf='';
export async function api(path,method='GET',body){
 const response=await fetch(`/api${path}`,{method,credentials:'same-origin',headers:{'content-type':'application/json',...(csrf?{'x-csrf-token':csrf}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});
 const result=await response.json();if(result.csrfToken)csrf=result.csrfToken;
 if(!response.ok){const error=new Error(result.error?.replaceAll('_',' ').toLowerCase()??'Request failed');error.status=response.status;error.code=result.error;throw error;}
 return result;
}
