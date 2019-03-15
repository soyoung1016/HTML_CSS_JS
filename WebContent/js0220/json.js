/**
 * json안에 json_array가 들어있는것
 */

var data = "{'class':4, 'pubDate':'2019-02-20', 'data':[";
	data += "{'name':'박영민', 'group':2, 'role':'조장-영화예매 프로젝트, 예매관리'},";
	data += "{'name':'김정윤', 'group':2, 'role':'조원-UI, 회원관리, 스낵관리'},";
	data += "{'name':'이재찬', 'group':1, 'role':'조원-반장, PC방 관리 프로젝트, 주문관리, 통계'},";
	data += "{'name':'김정운', 'group':1, 'role':'조원-로그인, 회원관리'},";
	data += "{'name':'공선의', 'group':3, 'role':'조원 - 구인구직, 구직관리, 구직조회, 관심구인'},";
	data += "{'name':'이재현', 'group':3, 'role':'조원-구인구직, 관심구인구직, 지원현황'},";
	data += "], 'result':true}";
	
	
var json_obj = eval("("+data+")");