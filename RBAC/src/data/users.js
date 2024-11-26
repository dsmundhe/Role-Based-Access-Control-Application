let users = [
    {
        "id": 1,
        "username": "adminUser1",
        "email": "admin1@example.com",
        "role": "admin",
        "permissions": ["create_user", "edit_user", "delete_user", "view_dashboard", "manage_roles"],
        "status": "active",
        "profile": {
            "fullName": "Rajesh Kumar",
            "profilePicture": "https://i.pinimg.com/736x/c6/0b/ec/c60bec168e19a2c9881bfc2806766fc7.jpg",
            "address": "123 Admin Street, Mumbai, Maharashtra",
            "contactNumber": "+911234567890"
        }
    },
    {
        "id": 2,
        "username": "managerUser1",
        "email": "manager1@example.com",
        "role": "manager",
        "permissions": ["view_dashboard", "create_report", "view_reports"],
        "status": "active",
        "profile": {
            "fullName": "Suresh Sharma",
            "profilePicture": "https://i.pinimg.com/736x/38/54/a8/3854a8e825bc816e7d7c2caa2c255460.jpg",
            "address": "456 Manager Lane, Pune, Maharashtra",
            "contactNumber": "+911234567891"
        }
    },
    {
        "id": 3,
        "username": "editorUser1",
        "email": "editor1@example.com",
        "role": "editor",
        "permissions": ["edit_content", "view_content"],
        "status": "active",
        "profile": {
            "fullName": "Anjali Gupta",
            "profilePicture": "https://i.pinimg.com/736x/36/0b/4f/360b4f0ad0ddb83d372c31a3687c5f03.jpg",
            "address": "789 Editor Road, Delhi, India",
            "contactNumber": "+911234567892"
        }
    },
    {
        "id": 4,
        "username": "viewerUser1",
        "email": "viewer1@example.com",
        "role": "viewer",
        "permissions": ["view_dashboard", "view_content"],
        "status": "inactive",
        "profile": {
            "fullName": "Priya Patel",
            "profilePicture": "https://i.pinimg.com/736x/3a/be/c2/3abec29993e7ea4a5b3bed4ed24f5e62.jpg",
            "address": "101 Viewer Blvd, Bangalore, Karnataka",
            "contactNumber": "+911234567893"
        }
    },
    {
        "id": 5,
        "username": "adminUser2",
        "email": "admin2@example.com",
        "role": "admin",
        "permissions": ["create_user", "edit_user", "delete_user", "view_dashboard", "manage_roles"],
        "status": "active",
        "profile": {
            "fullName": "Vikram Singh",
            "profilePicture": "https://i.pinimg.com/736x/cf/13/17/cf1317a828577134642e892695f77821.jpg",
            "address": "234 Admin Road, Chennai, Tamil Nadu",
            "contactNumber": "+911234567894"
        }
    },
    {
        "id": 6,
        "username": "managerUser2",
        "email": "manager2@example.com",
        "role": "manager",
        "permissions": ["view_dashboard", "create_report", "view_reports"],
        "status": "active",
        "profile": {
            "fullName": "Neha Verma",
            "profilePicture": "https://i.pinimg.com/736x/d1/ce/a5/d1cea5763844a786a38c05453daa9292.jpg",
            "address": "567 Manager Lane, Kolkata, West Bengal",
            "contactNumber": "+911234567895"
        }
    },
    {
        "id": 7,
        "username": "editorUser2",
        "email": "editor2@example.com",
        "role": "editor",
        "permissions": ["edit_content", "view_content"],
        "status": "active",
        "profile": {
            "fullName": "Ravi Yadav",
            "profilePicture": "https://i.pinimg.com/736x/8c/cd/6a/8ccd6a890398cc6b4d0999dea7a3b7dd.jpg",
            "address": "890 Editor Road, Ahmedabad, Gujarat",
            "contactNumber": "+911234567896"
        }
    },
    {
        "id": 8,
        "username": "viewerUser2",
        "email": "viewer2@example.com",
        "role": "viewer",
        "permissions": ["view_dashboard", "view_content"],
        "status": "inactive",
        "profile": {
            "fullName": "Sita Reddy",
            "profilePicture": "https://i.pinimg.com/736x/44/aa/96/44aa960d4be29f268224b7d1ad7f2310.jpg",
            "address": "112 Viewer Blvd, Hyderabad, Telangana",
            "contactNumber": "+911234567897"
        }
    },
    {
        "id": 9,
        "username": "adminUser3",
        "email": "admin3@example.com",
        "role": "admin",
        "permissions": ["create_user", "edit_user", "delete_user", "view_dashboard", "manage_roles"],
        "status": "active",
        "profile": {
            "fullName": "Deepak Joshi",
            "profilePicture": "https://i.pinimg.com/736x/c3/ca/b5/c3cab5b336680ea41f335662669c6201.jpg",
            "address": "678 Admin Street, Jaipur, Rajasthan",
            "contactNumber": "+911234567898"
        }
    },
    {
        "id": 10,
        "username": "managerUser3",
        "email": "manager3@example.com",
        "role": "manager",
        "permissions": ["view_dashboard", "create_report", "view_reports"],
        "status": "active",
        "profile": {
            "fullName": "Aditi Mehta",
            "profilePicture": "https://i.pinimg.com/736x/1c/e1/8a/1ce18a22276815b85d4700a9ee7fdfeb.jpg",
            "address": "789 Manager Lane, Lucknow, Uttar Pradesh",
            "contactNumber": "+911234567899"
        }
    },
    {
        "id": 11,
        "username": "editorUser3",
        "email": "editor3@example.com",
        "role": "editor",
        "permissions": ["edit_content", "view_content"],
        "status": "inactive",
        "profile": {
            "fullName": "Karan Khanna",
            "profilePicture": "https://i.pinimg.com/736x/ca/8a/ca/ca8acae43c6cd08b09f5c66f90abed71.jpg",
            "address": "890 Editor Road, Chandigarh, Punjab",
            "contactNumber": "+911234567900"
        }
    },
    {
        "id": 12,
        "username": "viewerUser3",
        "email": "viewer3@example.com",
        "role": "viewer",
        "permissions": ["view_dashboard", "view_content"],
        "status": "active",
        "profile": {
            "fullName": "Priyanka Bose",
            "profilePicture": "https://i.pinimg.com/736x/df/d9/b8/dfd9b819261ebbfd4f2842c05f2c71fc.jpg",
            "address": "101 Viewer Blvd, Surat, Gujarat",
            "contactNumber": "+911234567901"
        }
    },
    {
        "id": 13,
        "username": "adminUser4",
        "email": "admin4@example.com",
        "role": "admin",
        "permissions": ["create_user", "edit_user", "delete_user", "view_dashboard", "manage_roles"],
        "status": "active",
        "profile": {
            "fullName": "Manoj Kumar",
            "profilePicture": "https://i.pinimg.com/736x/dd/e7/a3/dde7a3235d2c4eabd41c66bd96ee8e08.jpg",
            "address": "234 Admin Road, Bhopal, Madhya Pradesh",
            "contactNumber": "+911234567902"
        }
    },
    {
        "id": 14,
        "username": "managerUser4",
        "email": "manager4@example.com",
        "role": "manager",
        "permissions": ["view_dashboard", "create_report", "view_reports"],
        "status": "inactive",
        "profile": {
            "fullName": "Sonali Mishra",
            "profilePicture": "https://i.pinimg.com/736x/62/e8/7f/62e87f646ab2cafa9880a7c355c90643.jpg",
            "address": "345 Manager Lane, Indore, Madhya Pradesh",
            "contactNumber": "+911234567903"
        }
    },
    {
        "id": 15,
        "username": "editorUser4",
        "email": "editor4@example.com",
        "role": "editor",
        "permissions": ["edit_content", "view_content"],
        "status": "active",
        "profile": {
            "fullName": "Ashok Kumar",
            "profilePicture": "https://i.pinimg.com/736x/12/77/26/12772677be944cce6cae9a4d1cea19d7.jpg",
            "address": "567 Editor Road, Nagpur, Maharashtra",
            "contactNumber": "+911234567904"
        }
    }
]
export default users;