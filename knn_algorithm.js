class knn_algo{
	constructor(k = 5) {
		this.k = 5;
	}
	calc_euclidean_distance(x1,x2) {
		Math.sqrt((x1-x2).reduce((a, b) => a + b * b, 0))
	}
	predict(x_train,x_test,y_train){
		
	}
	_predict(x){
		let distances = self.X_train.map(x_train => euclidean_distance(x, x_train));
		let indices = Array.from(distance.keys());
		indices.sort((a, b) => distance[a] - distance[b]);
		let result = indices.slice(0, self.k);

		let indices = Array.from(distance.keys());
		indices.sort((a, b) => distance[a] - distance[b]);
		let result = indices.slice(0, self.k);


	}
	fit(X,y){
		 
	}
}
