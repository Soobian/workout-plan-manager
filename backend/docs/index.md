##Dokumentacja backendu aplikacji FIT CRAFTER

###Module backend.users.models

Plik zawiera klasy reprezentujące utworzone tabele w bazie danych z odpowiednimi atrybutami  
- CustomAccountManager: Tabela zawierająca informacje na temat administratora 
- CustomUser: Tabela przechowująca informacje na temat użytkownika 
- UserParameters: Tabela zawierająca dodatkowe parametry użytkownika  

@author Maciej Ciepał

---
**backend.users.models.CustomAccountManager** 

def create_superuser(self,
                     email: Any,
                     password: Any,
                     **other_fields: Any) -> Any

Funkcja tworząca instancje super użytkownika, czyli administratora

Params:
- email – adres a-mail
- password – hasło

Returns: nowy administrator

---
**backend.users.models.CustomAccountManager** 

def create_user(self,
                email: Any,
                password: Any,
                **other_fields: Any) -> Any

Funkcja tworząca nowego użytkownika

Params:
- email – adres e-mail
- password – silne hasło

Returns: nowy użytkownik

---
###Module backend.users.views

Plik zawiera zbiór widoków dostęnych w aplikacji  
- BlacklistTokenUpdateView Widok Black list 
- UserParametersViewSet Widok dodatkowych parametrów użytkownika  

@author Maciej Ciepał

---
### Module backend.users.urls
Plik zawiera adresy url dla odpowiednich widoków

@author Maciej Ciepał

---
###Module backend.users.serializers
Plik zawiera zbiór serializatorów modeli bazy danych  
- CustomUserSerializer: Serializator użykowników 
- UserParametersSerializer: Serializator dla parametrów użytkownika  

@author Aneta Postrożny, Maciej Ciepał

---
###Module backend.users.admin
Plik zawiera zarejestrowany model bazy dla użytkownika  

@author Maciej Ciepał

---
###Module backend.backend.urls
Plik zawiera adresy url dla odpowiednich widoków  

@author Aneta Postrożny, Maciej Ciepał

---
###Module backend.workout.admin
Plik zawiera zarejestrowane modele bazy  

@author Aneta Postrożny, Maciej Ciepał

---
###Module backend.workout.models
Plik zawiera klasy reprezentujące utworzone tabele w bazie danych z odpowiednimi atrybutami  
- MuscleGroup: Tabela reprezentująca grupy mięśni 
- Exercise: Tabela przechowująca informacje na temat ćwiczeń 
- WorkoutPlan: Tabela zawierająca informacje na temat dostępnych planów ćwiczeniowych 
- WorkoutPlanDay: Tabela zawierająca szczegółowe dane na temat danych planów ćwiczeniowych 
- WorkoutPlanDayExercise: Tabela zbiorów ćwiczeń dostępnych w ramach danego planu ćwiczeń 
- WorkoutPlanDayExerciseSets: Tabela zawierająca dokładne dane na temat sposobu wykonania ćwiczenia  

@author Aneta Postrożny

---
###Module backend.workout.serializers
Plik zawiera zbiór serializatorów modeli bazy danych  
- MuscleGroupSerializer: Serializator dla grup mięśni 
- ExerciseSerializer: Serializator ćwiczeń 
- WorkoutPlanSerializer: Serializator Planów ćwiczeń 
- WorkoutPlanDaySerializer: Serializator dniowego planu ćwiczeń 
- WorkoutPlanDayExerciseSerializer: Serializator ćwiczeń w danym dniu 
- WorkoutPlanDayExerciseSetsSerializer: Serializator szczegółowych informacji na temat ćwiczenia  

@author Aneta Postrożny, Maciej Ciepał

---
###Module backend.workout.views
Plik zawiera zbiór widoków dostęnych w aplikacji  
- MuscleGroupViewSet: Widok dla grup mięśni 
- ExerciseViewSet: Widok ćwiczeń 
- WorkoutPlanViewSet: Widok dostępnych planów ćwiczeń 
- WorkoutPlanDayViewSet: Widok podziału planu ćwiczeń na dni 
- WorkoutPlanDayExerciseViewSet: Widok ćwiczeń dla konkretnego dnia planu ćwiczeń 
- WorkoutPlanDayExerciseSetsViewSet: Widok szczegółowych informacji na temat jak wykonywać dane ćwiczenie  

@author Aneta Postrożny, Maciej Ciepał

---
###Module backend.workout.urls
Plik zawiera adresy url dla odpowiednich widoków  

@author Aneta Postrożny

---
###Module backend.measurements.admin
Plik zawiera zarejestrowane modele bazy  

@author Maciej Ciepał

---
###Module backend.measurements.models
Klasa reprezentująca utworzoną tabelę w bazie danych z odpowiednimi atrybutami  
- Measurement: Tabela zawierająca informacje na temat wymiarów użytkownika  

@author Maciej Ciepał

---
###Module backend.measurements.serializers
Plik zawiera serializatory modeli bazy danych  
- MeasurementSerializer Serializator dla parametrów użytkownika  

@author Maciej Ciepał

---
###Module backend.measurements.urls
Plik zawiera adresy url dla odpowiednich widoków  

@author Maciej Ciepał

---
###Module backend.measurements.views
Plik zawiera zbiór widoków dostęnych w aplikacji  
- MeasurementViewSet: Widok pomiarów użytkownika 
- MeasurementHistoryViewSet: Widok Histrorii pomiarów  

@author Maciej Ciepał

---