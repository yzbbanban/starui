$("#page").paging({
			pageNo:5,
			totalPage: 12,
			totalSize: 300,
			callback: function(num) {
				alert(num)
			}
})