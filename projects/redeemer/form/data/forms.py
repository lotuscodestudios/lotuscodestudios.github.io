from django import forms

class NameForm (forms.Form):
    usr_name = forms.CharField(max_length=30, label="User Name")
    password = forms.IntegerField()