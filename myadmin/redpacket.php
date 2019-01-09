<?php
require_once('Page.php');
class Redpacket extends Page{
	function show(){
		$redpacket_round_m=new M('redpacket_round');
		$redpacket_round=$redpacket_round_m->select('1');
		foreach($redpacket_round as $k=>$v){
			$redpacket_round[$k]['amount']=$v['amount']/100;
			$redpacket_round[$k]['minamount']=$v['minamount']/100;
			$redpacket_round[$k]['maxamount']=$v['maxamount']/100;
			$redpacket_round[$k]['chance']=$v['chance']/1000;
		}
		$this->assign('redpacket_round',$redpacket_round);
		$this->display('templates/redpacket.html');
	}
}
$page=new Redpacket();
$page->setTitle('红包轮次设置');
$page->show();