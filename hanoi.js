function Hanoi(num,fro,to){
	var str = "ABC";
	var step = '';
	function move(num,fro,to){ 
		if(num===1){
			step += (fro+"=>"+to+" ");
			return;
		}else{
			move(num-1,fro,str.replace(fro,'').replace(to,''));
			step += (fro+"=>"+to+" ");
			move(num-1,str.replace(fro,'').replace(to,''),fro)
		} 
	}
	move(num,fro,to);
	return step;
}
