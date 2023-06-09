from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)
    vip = models.BooleanField(default=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin":self.vin})

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField()

    def get_api_url(self):
        return reverse("api_list_technicians", kwargs={"pk": self.id})

class ServiceAppointment(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    reason = models.TextField()
    vip = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    technician = models.ForeignKey(
        'Technician',
        related_name='technicians',
        on_delete=models.CASCADE,
    )
    vin = models.CharField(max_length=17)
    def get_api_url(self):
        return reverse("api_list_appointment", kwargs={"vin": self.pk})

