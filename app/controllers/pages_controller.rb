class PagesController < ApplicationController
    def home
      @events = Event.all
      @employees = Employee.all
    end
  end