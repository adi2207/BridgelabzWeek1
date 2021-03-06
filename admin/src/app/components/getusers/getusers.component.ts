import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as $ from 'jquery';
import { AuthService } from '../../services/authservice/auth.service'
@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {

  records: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    $(function () {
      this.options = {
        purpose: 'user/getAdminUserList'
      }
      $.get(environment.baseUrl + this.options.purpose, (response, error) => {
        if (response) {
          console.log(response);
          this.records = response.data.data;
          $('#basicCount').html(this.records.filter(function (i) {
            return i.service == "basic" || i.service == "Basic"
          }).length);
          $('#advanceCount').html(this.records.filter(function (i) {
            return i.service == "advance" || i.service == "Advance"
          }).length);
          var row = "";
          $.each(this.records, function (key, value) {
            row += "<tr>";
            row += "<td>" + key + "</td>";
            row += "<td>" + value.firstName + "</td>";
            row += "<td>" + value.lastName + "</td>";
            row += "<td>" + value.email + "</td>";
            row += "<td>" + value.service + "</td>";
            row += "</tr>";
          })
          $("#admin-table").append(row);
          $(document).ready(function () {
            $("#searchInput").on("keyup", function () {
              var value = $(this).val().toLowerCase();
              $("#admin-table td").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });
        }
        else
          console.log(error);
      });
    });
  }
  getAdvanceUserList() {
    $(function () {
      var filteredRecords = this.records.filter(function (v) {
        return v.service == "advance";
      });
      var row = "";
      console.log(filteredRecords)
      $.each(filteredRecords, function (key, value) {
        {
          row += "<tr>";
          row += "<td>" + key + "</td>";
          row += "<td>" + value.firstName + "</td>";
          row += "<td>" + value.lastName + "</td>";
          row += "<td>" + value.email + "</td>";
          row += "<td>" + value.service + "</td>";
          row += "</tr>";
        }
      })
      $("#admin-table").html(row);
    })
  }
  getBasicUserList() {
    $(function () {
      var filteredRecords = this.records.filter(function (v) {
        return v.service == "basic"||v.service =="Basic";
      });
      var row = "";
      console.log(filteredRecords);
      $.each(filteredRecords, function (key, value) {
        {
          row += "<tr>";
          row += "<td>" + key + "</td>";
          row += "<td>" + value.firstName + "</td>";
          row += "<td>" + value.lastName + "</td>";
          row += "<td>" + value.email + "</td>";
          row += "<td>" + value.service + "</td>";
          row += "</tr>";
        }
      })
      $("#admin-table").html(row);
    })

  }
  getBasicAndAdvanceCount() {

  }
  onSearch() {

  }
}
