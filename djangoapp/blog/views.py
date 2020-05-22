from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


posts=[	{	'author':'R.D Sharma',
			'title' : 'Mathematics',
			'content': 'First Post',
		},
		{	'author':'B.S Grewal',
			'title' : 'Engineering Mathematics',
			'content': 'Second Post',
		}
]

def home(request):
	context={'posts1':posts}
	return render(request,'blog/home.html',context)
	

def about(request):
	return render(request,'blog/about.html')